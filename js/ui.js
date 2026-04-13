var UI = (function() {

  var app = document.getElementById('app');

  function el(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === 'className') e.className = attrs[k];
        else if (k === 'textContent') e.textContent = attrs[k];
        else if (k === 'innerHTML') e.innerHTML = attrs[k];
        else if (k.startsWith('on')) e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      }
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function(c) {
        if (typeof c === 'string') e.appendChild(document.createTextNode(c));
        else if (c) e.appendChild(c);
      });
    }
    return e;
  }

  function clear() {
    app.innerHTML = '';
  }

  // ===== HOME SCREEN =====

  // Track which sections are collapsed (persists during session)
  var collapsedSections = null; // initialized on first render

  function findNextLesson(lessons, progress) {
    for (var i = 0; i < lessons.length; i++) {
      var l = lessons[i];
      if (!progress.completed[l.id] && Engine.isLessonUnlocked(l.id, progress)) {
        return l;
      }
    }
    return null;
  }

  function renderHome(progress, onLessonTap) {
    clear();
    var titleTapCount = 0;
    var lessons = Data.lessons;

    // Build section info: which sections exist and their completion status
    var sectionOrder = [];
    var sectionLessons = {};
    for (var i = 0; i < lessons.length; i++) {
      var sec = lessons[i].section;
      if (!sectionLessons[sec]) {
        sectionOrder.push(sec);
        sectionLessons[sec] = [];
      }
      sectionLessons[sec].push(lessons[i]);
    }

    // Initialize collapsed state on first render: collapse fully completed sections
    if (collapsedSections === null) {
      collapsedSections = {};
      for (var si = 0; si < sectionOrder.length; si++) {
        var secName = sectionOrder[si];
        var allDone = sectionLessons[secName].every(function(l) {
          return !!progress.completed[l.id];
        });
        collapsedSections[secName] = allDone;
      }
    }

    var header = el('div', { className: 'home-header' }, [
      el('h1', {
        textContent: 'Attikore',
        onClick: function() {
          titleTapCount++;
          if (titleTapCount >= 3) {
            titleTapCount = 0;
            var unlocked = Engine.unlockNext(progress);
            if (unlocked) {
              renderHome(Engine.getProgress(), onLessonTap);
            }
          }
        }
      }),
      el('div', { className: 'subtitle', textContent: 'Learn Attic Greek' }),
      el('div', { className: 'subtitle-hint', textContent: '(click Attikore three times to skip to the next lesson)' })
    ]);

    var completedCount = Object.keys(progress.completed || {}).length;
    var statsBar = el('div', { className: 'stats-bar' }, [
      el('div', { className: 'stat' }, [
        el('div', { className: 'stat-value', textContent: String(progress.totalXP || 0) }),
        el('div', { className: 'stat-label', textContent: 'XP' })
      ]),
      el('div', { className: 'stat' }, [
        el('div', { className: 'stat-value', textContent: String(progress.streak || 0) }),
        el('div', { className: 'stat-label', textContent: 'Day Streak' })
      ]),
      el('div', { className: 'stat' }, [
        el('div', { className: 'stat-value', textContent: String(completedCount) }),
        el('div', { className: 'stat-label', textContent: 'Lessons' })
      ])
    ]);

    // Continue button
    var nextLesson = findNextLesson(lessons, progress);
    var continueBtn = null;
    if (nextLesson) {
      continueBtn = el('button', {
        className: 'btn-continue-home',
        onClick: function() {
          AudioFX.play('tap');
          onLessonTap(nextLesson);
        }
      }, [
        el('span', { className: 'continue-label', textContent: 'Continue' }),
        el('span', { className: 'continue-lesson', textContent:
          (nextLesson.section.indexOf(':') !== -1
            ? nextLesson.section.split(':')[0]
            : nextLesson.section) + ': ' + nextLesson.title
        })
      ]);
    }

    var path = el('div', { className: 'lesson-path' });
    var currentSection = '';
    var currentContainer = null;
    var lessonIndex = 0;

    for (var i = 0; i < lessons.length; i++) {
      var lesson = lessons[i];

      if (lesson.section !== currentSection) {
        currentSection = lesson.section;

        // Count completed lessons in this section
        var secLessons = sectionLessons[currentSection];
        var secCompleted = secLessons.filter(function(l) { return !!progress.completed[l.id]; }).length;
        var isCollapsed = !!collapsedSections[currentSection];

        var arrow = el('span', {
          className: 'section-arrow' + (isCollapsed ? ' collapsed' : ''),
          textContent: isCollapsed ? '▸' : '▾'
        });
        var countBadge = el('span', {
          className: 'section-count',
          textContent: secCompleted + '/' + secLessons.length
        });

        var sectionLabel = el('div', {
          className: 'section-label clickable',
          onClick: (function(secName, arrowEl, countEl) {
            return function() {
              collapsedSections[secName] = !collapsedSections[secName];
              renderHome(Engine.getProgress(), onLessonTap);
            };
          })(currentSection, arrow, countBadge)
        }, [
          arrow,
          el('span', { textContent: ' ' + currentSection + ' ' }),
          countBadge
        ]);

        path.appendChild(sectionLabel);

        // Create a container for this section's lessons
        currentContainer = el('div', {
          className: 'section-lessons' + (isCollapsed ? ' collapsed' : '')
        });
        path.appendChild(currentContainer);
        lessonIndex = 0;
      }

      if (lessonIndex > 0) {
        var prevCompleted = !!progress.completed[lessons[i - 1].id];
        currentContainer.appendChild(el('div', { className: 'connector' + (prevCompleted ? ' active' : '') }));
      }

      var completed = progress.completed[lesson.id];
      var unlocked = Engine.isLessonUnlocked(lesson.id, progress);
      var status = completed ? 'completed' : (unlocked ? 'available' : 'locked');

      var node = el('div', {
        className: 'lesson-node ' + status,
        title: lesson.title,
        onClick: (function(l, s) {
          return function() {
            if (s === 'locked') return;
            AudioFX.play('tap');
            onLessonTap(l);
          };
        })(lesson, status)
      }, [
        el('div', { className: 'lesson-title', textContent: lesson.title }),
        el('div', { className: 'lesson-subtitle', textContent: lesson.subtitle })
      ]);

      if (completed) {
        var starsDiv = el('div', { className: 'lesson-stars' });
        for (var s = 0; s < 3; s++) {
          starsDiv.appendChild(el('span', {
            className: s < completed.stars ? 'star-filled' : 'star-empty',
            textContent: s < completed.stars ? '★' : '☆'
          }));
        }
        node.appendChild(starsDiv);
      }

      currentContainer.appendChild(node);
      lessonIndex++;
    }

    app.appendChild(header);
    app.appendChild(statsBar);
    if (continueBtn) app.appendChild(continueBtn);
    app.appendChild(path);

  }

  // ===== LESSON SCREEN =====
  function renderLesson(exerciseIndex, totalExercises, hearts, onClose) {
    clear();
    var screen = el('div', { className: 'lesson-screen' });

    // Rotate background art randomly
    var bgs = [
      { url: 'dragon5.png', pos: 'center 45%', size: 'contain' },
      { url: 'Medea2.png', pos: 'center 55%', size: 'contain' },
      { url: 'Erich3.png', pos: 'center center', size: 'auto 60%' },
      { url: 'BlendChariot3.png', pos: 'center 45%', size: 'contain' },
      { url: 'Thyrsus9.png', pos: 'center 40%', size: 'contain' }
    ];
    var bg = bgs[Math.floor(Math.random() * bgs.length)];
    screen.style.backgroundImage = 'url(' + bg.url + ')';
    screen.style.backgroundPosition = bg.pos;
    screen.style.backgroundSize = bg.size;

    var progress = Math.round((exerciseIndex / totalExercises) * 100);
    var topBar = el('div', { className: 'lesson-top-bar' }, [
      el('button', { className: 'btn-close', textContent: '×', onClick: onClose }),
      el('div', { className: 'progress-track' }, [
        el('div', { className: 'progress-fill', style: 'width:' + progress + '%' })
      ]),
      renderHearts(hearts)
    ]);

    screen.appendChild(topBar);
    var area = el('div', { className: 'exercise-area' });
    screen.appendChild(area);
    app.appendChild(screen);
    return area;
  }

  function goldAppleSVG() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.setAttribute('width', '28');
    svg.setAttribute('height', '28');
    svg.innerHTML =
      '<defs>' +
        '<radialGradient id="appleGold" cx="0.4" cy="0.35" r="0.65" fx="0.35" fy="0.3">' +
          '<stop offset="0%" stop-color="#fef0a0"/>' +
          '<stop offset="20%" stop-color="#FCC342"/>' +
          '<stop offset="50%" stop-color="#d4a020"/>' +
          '<stop offset="75%" stop-color="#a87a12"/>' +
          '<stop offset="100%" stop-color="#7a580a"/>' +
        '</radialGradient>' +
        '<radialGradient id="appleShine" cx="0.32" cy="0.28" r="0.35">' +
          '<stop offset="0%" stop-color="rgba(255,255,240,0.85)"/>' +
          '<stop offset="50%" stop-color="rgba(255,245,200,0.3)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0)"/>' +
        '</radialGradient>' +
        '<linearGradient id="rimLight" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="rgba(255,240,180,0.5)"/>' +
          '<stop offset="50%" stop-color="rgba(255,255,255,0)"/>' +
          '<stop offset="100%" stop-color="rgba(255,230,140,0.3)"/>' +
        '</linearGradient>' +
        '<linearGradient id="stemGold" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#b8901a"/>' +
          '<stop offset="100%" stop-color="#7a580a"/>' +
        '</linearGradient>' +
        '<radialGradient id="leafGold" cx="0.3" cy="0.4" r="0.7">' +
          '<stop offset="0%" stop-color="#FCC342"/>' +
          '<stop offset="40%" stop-color="#d4a020"/>' +
          '<stop offset="100%" stop-color="#8a6410"/>' +
        '</radialGradient>' +
        '<linearGradient id="leafShine" x1="0" y1="0" x2="0.5" y2="1">' +
          '<stop offset="0%" stop-color="rgba(255,245,180,0.6)"/>' +
          '<stop offset="100%" stop-color="rgba(255,255,255,0)"/>' +
        '</linearGradient>' +
      '</defs>' +
      // stem
      '<path d="M50 26 C49 16, 53 6, 60 4" stroke="url(#stemGold)" stroke-width="3.5" fill="none" stroke-linecap="round"/>' +
      // leaf with vein
      '<path d="M52 19 Q62 6, 76 10 Q68 18, 54 22Z" fill="url(#leafGold)" stroke="#7a5c0e" stroke-width="0.8"/>' +
      '<path d="M52 19 Q62 6, 76 10 Q68 18, 54 22Z" fill="url(#leafShine)"/>' +
      '<path d="M54 20 Q63 12, 72 12" stroke="#9a7a18" stroke-width="0.7" fill="none"/>' +
      // apple body — curvy with lobes
      '<path d="M50 30 C36 24, 10 32, 12 58 C13 78, 30 96, 46 94 Q50 88, 54 94 C70 96, 87 78, 88 58 C90 32, 64 24, 50 30Z" fill="url(#appleGold)"/>' +
      // shine overlay
      '<path d="M50 30 C36 24, 10 32, 12 58 C13 78, 30 96, 46 94 Q50 88, 54 94 C70 96, 87 78, 88 58 C90 32, 64 24, 50 30Z" fill="url(#appleShine)"/>' +
      // rim highlight
      '<path d="M50 30 C36 24, 10 32, 12 58 C13 78, 30 96, 46 94 Q50 88, 54 94 C70 96, 87 78, 88 58 C90 32, 64 24, 50 30Z" fill="none" stroke="url(#rimLight)" stroke-width="1.5"/>' +
      // specular highlight
      '<ellipse cx="34" cy="46" rx="9" ry="16" fill="rgba(255,255,240,0.3)" transform="rotate(-25,34,46)"/>' +
      // small secondary highlight on right
      '<ellipse cx="68" cy="70" rx="5" ry="8" fill="rgba(255,240,180,0.12)" transform="rotate(15,68,70)"/>' +
      // bottom dimple shadow
      '<path d="M44 92 Q50 86, 56 92" stroke="rgba(100,60,5,0.3)" stroke-width="1.5" fill="none"/>';
    return svg;
  }

  function renderHearts(hearts) {
    var div = el('div', { className: 'hearts' });
    for (var i = 0; i < 3; i++) {
      var span = el('span', {
        className: 'heart' + (i >= hearts ? ' lost' : '')
      });
      span.appendChild(goldAppleSVG());
      div.appendChild(span);
    }
    return div;
  }

  // ===== EXERCISE RENDERERS =====

  function renderIntroExercise(area, exercise, onContinue) {
    var cardIndex = 0;
    var cards = exercise.cards;

    function showCard() {
      area.innerHTML = '';
      var card = el('div', { className: 'intro-card' }, [
        el('h2', { textContent: exercise.title }),
        el('div', { className: 'intro-body', innerHTML: cards[cardIndex].html })
      ]);

      if (cards.length > 1) {
        var nav = el('div', { className: 'intro-nav' });
        var dots = el('div', { className: 'intro-dots' });
        for (var i = 0; i < cards.length; i++) {
          dots.appendChild(el('div', { className: 'intro-dot' + (i === cardIndex ? ' active' : '') }));
        }
        nav.appendChild(dots);
        card.appendChild(nav);
      }

      var btnRow = el('div', { className: 'intro-btn-row' });

      var btnText = cardIndex < cards.length - 1 ? 'Next' : 'Continue';
      var btn = el('button', {
        className: 'btn-continue',
        textContent: btnText,
        onClick: function() {
          AudioFX.play('tap');
          if (cardIndex < cards.length - 1) {
            cardIndex++;
            showCard();
          } else {
            onContinue();
          }
        }
      });
      btnRow.appendChild(btn);

      if (cardIndex > 0) {
        var backBtn = el('button', {
          className: 'btn-back',
          textContent: 'Back',
          onClick: function() {
            AudioFX.play('tap');
            cardIndex--;
            showCard();
          }
        });
        btnRow.appendChild(backBtn);
      }

      card.appendChild(btnRow);
      area.appendChild(card);
    }
    showCard();
  }

  function renderMCExercise(area, exercise, onAnswer) {
    area.innerHTML = '';

    var prompt = el('div', { className: 'exercise-prompt' }, [
      el('div', { className: 'prompt-label', textContent: exercise.prompt })
    ]);

    if (exercise.display) {
      var displayClass = 'prompt-text' + (exercise.displayGreek ? ' greek' : '');
      // Auto-size long display text
      if (exercise.display.length > 30) displayClass += ' small';
      prompt.appendChild(el('div', { className: displayClass, textContent: exercise.display }));
    }

    area.appendChild(prompt);

    var optionsDiv = el('div', { className: 'mc-options' });
    var answered = false;

    exercise.options.forEach(function(opt, i) {
      var btnClass = 'mc-btn';
      if (exercise.optionsGreek) btnClass += ' greek';
      // Auto-size using plain text length (strip any HTML tags)
      var optText = opt.replace(/<[^>]+>/g, '');
      if (optText.length > 40) btnClass += ' small';
      else if (optText.length > 25) btnClass += ' medium';

      var btn = el('button', { className: btnClass, 'data-value': opt });
      var optHtml = exercise.optionsHtml ? exercise.optionsHtml[i] : null;
      if (optHtml && optHtml !== opt) btn.innerHTML = optHtml;
      else btn.textContent = opt;

      btn.addEventListener('click', function() {
        if (answered) return;
        answered = true;
        var isCorrect = opt === exercise.correct;

        // Highlight correct and wrong
        var btns = optionsDiv.querySelectorAll('.mc-btn');
        btns.forEach(function(b) {
          if (b.dataset.value === exercise.correct) b.classList.add('correct');
          if (b === btn && !isCorrect) b.classList.add('wrong');
          b.style.pointerEvents = 'none';
        });

        AudioFX.play(isCorrect ? 'correct' : 'wrong');

        // Show continue
        var cont = el('button', {
          className: 'btn-continue',
          textContent: 'Continue',
          onClick: function() {
            onAnswer(isCorrect);
          }
        });
        area.appendChild(cont);
      });
      optionsDiv.appendChild(btn);
    });

    area.appendChild(optionsDiv);
  }

  function renderMatchExercise(area, exercise, onComplete) {
    area.innerHTML = '';

    var pairs = exercise.pairs;
    var leftItems = Engine.shuffle(pairs.map(function(p) { return p[0]; }));
    var rightItems = Engine.shuffle(pairs.map(function(p) { return p[1]; }));

    // Build lookup: left value → right value
    var pairMap = {};
    pairs.forEach(function(p) { pairMap[p[0]] = p[1]; });

    var matchCount = 0;
    var selectedLeftTile = null;
    var selectedRightTile = null;

    var prompt = el('div', { className: 'exercise-prompt' }, [
      el('div', { className: 'prompt-label', textContent: 'Match the pairs' })
    ]);
    area.appendChild(prompt);

    var matchArea = el('div', { className: 'match-area' });
    var leftCol = el('div', { className: 'match-col' });
    var rightCol = el('div', { className: 'match-col' });

    function checkMatch() {
      if (selectedLeftTile && selectedRightTile) {
        var leftVal = selectedLeftTile.dataset.value;
        var rightVal = selectedRightTile.dataset.value;
        var correct = pairMap[leftVal] === rightVal;
        if (correct) {
          matchCount++;
          AudioFX.play('tap');

          // Mark only the specific selected tiles as matched
          selectedLeftTile.classList.add('matched');
          selectedLeftTile.classList.remove('selected');
          selectedRightTile.classList.add('matched');
          selectedRightTile.classList.remove('selected');

          selectedLeftTile = null;
          selectedRightTile = null;

          // Check if all matched
          if (matchCount === pairs.length) {
            setTimeout(function() {
              var cont = el('button', {
                className: 'btn-continue',
                textContent: 'Continue',
                onClick: function() { onComplete(); }
              });
              area.appendChild(cont);
            }, 300);
          }
        } else {
          // Wrong match - shake and deselect
          selectedLeftTile.classList.add('wrong-match');
          selectedLeftTile.classList.remove('selected');
          selectedRightTile.classList.add('wrong-match');
          selectedRightTile.classList.remove('selected');
          var lt = selectedLeftTile, rt = selectedRightTile;
          setTimeout(function() { lt.classList.remove('wrong-match'); rt.classList.remove('wrong-match'); }, 300);

          selectedLeftTile = null;
          selectedRightTile = null;
        }
      }
    }

    leftItems.forEach(function(item) {
      var isGreek = /[\u0370-\u03FF\u1F00-\u1FFF]/.test(item);
      var tileClass = 'match-tile' + (isGreek ? ' greek' : '');
      if (item.length > 30) tileClass += ' small';
      else if (item.length > 20) tileClass += ' medium';

      var tile = el('div', { className: tileClass, textContent: item, 'data-value': item });
      tile.addEventListener('click', function() {
        if (tile.classList.contains('matched')) return;
        AudioFX.play('tap');
        leftCol.querySelectorAll('.match-tile').forEach(function(t) { t.classList.remove('selected'); });
        tile.classList.add('selected');
        selectedLeftTile = tile;
        checkMatch();
      });
      leftCol.appendChild(tile);
    });

    rightItems.forEach(function(item) {
      var itemText = item.replace(/<[^>]+>/g, '');
      var isGreek = /[\u0370-\u03FF\u1F00-\u1FFF]/.test(itemText);
      var tileClass = 'match-tile' + (isGreek ? ' greek' : '');
      if (itemText.length > 30) tileClass += ' small';
      else if (itemText.length > 20) tileClass += ' medium';

      var tile = el('div', { className: tileClass, 'data-value': item });
      if (item !== itemText) tile.innerHTML = item;
      else tile.textContent = item;
      tile.addEventListener('click', function() {
        if (tile.classList.contains('matched')) return;
        AudioFX.play('tap');
        rightCol.querySelectorAll('.match-tile').forEach(function(t) { t.classList.remove('selected'); });
        tile.classList.add('selected');
        selectedRightTile = tile;
        checkMatch();
      });
      rightCol.appendChild(tile);
    });

    matchArea.appendChild(leftCol);
    matchArea.appendChild(rightCol);
    area.appendChild(matchArea);
  }

  // ===== RESULTS SCREEN =====
  function renderResults(stars, xp, accuracy, onContinue) {
    clear();
    AudioFX.play('complete');
    showConfetti();

    var screen = el('div', { className: 'results-screen' }, [
      el('div', { className: 'results-title', textContent: 'Lesson Complete!' }),
      renderStars(stars),
      el('div', { className: 'results-stat', innerHTML: 'XP Earned: <strong>+' + xp + '</strong>' }),
      el('div', { className: 'results-stat', innerHTML: 'Accuracy: <strong>' + accuracy + '%</strong>' }),
      el('button', { className: 'btn-continue', textContent: 'Continue', onClick: onContinue })
    ]);

    app.appendChild(screen);
    showXPToast(xp);
  }

  function renderStars(count) {
    var div = el('div', { className: 'results-stars' });
    for (var i = 0; i < 3; i++) {
      div.appendChild(el('span', {
        className: i < count ? 'star-filled' : 'star-empty',
        textContent: i < count ? '★' : '☆'
      }));
    }
    return div;
  }

  // ===== GAME OVER =====
  function renderGameOver(onRetry, onQuit) {
    clear();

    var screen = el('div', { className: 'game-over-screen' }, [
      el('div', { className: 'game-over-title', textContent: 'Out of Golden Apples!' }),
      el('div', { className: 'game-over-sub', textContent: 'Don\'t worry — practice makes perfect.' }),
      el('button', { className: 'btn-continue', textContent: 'Try Again', onClick: onRetry }),
      el('button', {
        className: 'btn-continue',
        textContent: 'Back to Home',
        style: 'background:var(--card);color:var(--text-dim);margin-top:8px;',
        onClick: onQuit
      })
    ]);

    app.appendChild(screen);
  }

  // ===== SPARKLE STARS =====
  function showConfetti() {
    var container = document.createElement('div');
    container.className = 'confetti-container';
    var colors = ['#FCC342', '#e8a84c', '#d4a01c', '#fff1a8', '#f0d040'];
    var shapes = ['★', '✦', '✧', '·'];

    for (var i = 0; i < 40; i++) {
      var piece = document.createElement('div');
      piece.className = 'sparkle-star';
      piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
      piece.style.left = Math.random() * 100 + '%';
      piece.style.color = colors[Math.floor(Math.random() * colors.length)];
      piece.style.fontSize = (10 + Math.random() * 18) + 'px';
      piece.style.animationDelay = (Math.random() * 1.2) + 's';
      piece.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(piece);
    }

    document.body.appendChild(container);
    setTimeout(function() { container.remove(); }, 4500);
  }

  // ===== XP TOAST =====
  function showXPToast(xp) {
    var toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = '+' + xp + ' XP';
    document.body.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 1500);
  }

  function renderWordBankExercise(area, exercise, onAnswer) {
    area.innerHTML = '';
    var answered = false;
    var selectedWords = [];

    // Prompt
    var prompt = el('div', { className: 'exercise-prompt' }, [
      el('div', { className: 'prompt-label', textContent: exercise.prompt })
    ]);
    if (exercise.display) {
      var displayClass = 'prompt-text' + (exercise.displayGreek ? ' greek' : '');
      if (exercise.display.length > 30) displayClass += ' small';
      prompt.appendChild(el('div', { className: displayClass, textContent: exercise.display }));
    }
    area.appendChild(prompt);

    // Answer zone — where selected words appear
    var answerZone = el('div', { className: 'wb-answer-zone' });
    area.appendChild(answerZone);

    // Word bank
    var bankDiv = el('div', { className: 'wb-bank' });
    var wordTiles = [];

    function updateAnswerZone() {
      answerZone.innerHTML = '';
      if (selectedWords.length === 0) {
        answerZone.appendChild(el('span', { className: 'wb-placeholder', textContent: 'Tap words below to build your answer' }));
        return;
      }
      selectedWords.forEach(function(word, idx) {
        var tile = el('button', {
          className: 'wb-answer-tile',
          textContent: word,
          onClick: function() {
            if (answered) return;
            selectedWords.splice(idx, 1);
            // Re-enable the bank tile
            wordTiles.forEach(function(t) {
              if (t.dataset.word === word && t.classList.contains('used')) {
                t.classList.remove('used');
                return;
              }
            });
            // Find first used tile with this word and re-enable it
            for (var i = 0; i < wordTiles.length; i++) {
              if (wordTiles[i].dataset.word === word && wordTiles[i].classList.contains('used')) {
                wordTiles[i].classList.remove('used');
                break;
              }
            }
            updateAnswerZone();
          }
        });
        answerZone.appendChild(tile);
      });
    }

    exercise.words.forEach(function(word) {
      var tile = el('button', {
        className: 'wb-tile',
        textContent: word,
        'data-word': word,
        onClick: function() {
          if (answered || tile.classList.contains('used')) return;
          tile.classList.add('used');
          selectedWords.push(word);
          updateAnswerZone();
        }
      });
      wordTiles.push(tile);
      bankDiv.appendChild(tile);
    });

    area.appendChild(bankDiv);

    // Check button
    var checkBtn = el('button', {
      className: 'btn-continue wb-check',
      textContent: 'Check',
      onClick: function() {
        if (answered) return;
        answered = true;

        var answersMatch = function(selected, answer) {
          return selected.length === answer.length &&
            selected.every(function(w, i) { return w === answer[i]; });
        };
        var isCorrect = answersMatch(selectedWords, exercise.answer) ||
          (exercise.altAnswers && exercise.altAnswers.some(function(alt) {
            return answersMatch(selectedWords, alt);
          }));

        // Show feedback
        answerZone.classList.add(isCorrect ? 'correct' : 'wrong');

        // Disable bank tiles
        wordTiles.forEach(function(t) { t.style.pointerEvents = 'none'; });

        // Show correct answer if wrong
        if (!isCorrect) {
          var correctDiv = el('div', { className: 'wb-correct-answer' }, [
            el('span', { textContent: 'Correct: ' }),
            el('span', { textContent: exercise.answer.join(' ') })
          ]);
          area.appendChild(correctDiv);
        }

        AudioFX.play(isCorrect ? 'correct' : 'wrong');

        checkBtn.textContent = 'Continue';
        checkBtn.classList.remove('wb-check');
        checkBtn.onclick = function() { onAnswer(isCorrect); };
      }
    });
    area.appendChild(checkBtn);

    updateAnswerZone();
  }

  // Full polytonic accent grid: organized by [breathing][accent]
  // Rows: no breathing, smooth (᾿), rough (῾), iota subscript, smooth+iota, rough+iota, macron
  // Cols: plain, acute, grave, circumflex
  var vowelGrid = {
    'α': {
      rows: [
        { label: '',  chars: ['α', 'ά', 'ὰ', 'ᾶ'] },
        { label: '᾿', chars: ['ἀ', 'ἄ', 'ἂ', 'ἆ'] },
        { label: '῾', chars: ['ἁ', 'ἅ', 'ἃ', 'ἇ'] },
        { label: 'ι', chars: ['ᾳ', 'ᾴ', 'ᾲ', 'ᾷ'] },
        { label: '᾿ι', chars: ['ᾀ', 'ᾄ', 'ᾂ', 'ᾆ'] },
        { label: '῾ι', chars: ['ᾁ', 'ᾅ', 'ᾃ', 'ᾇ'] }
      ],
      extra: ['ᾱ']
    },
    'ε': {
      rows: [
        { label: '',  chars: ['ε', 'έ', 'ὲ'] },
        { label: '᾿', chars: ['ἐ', 'ἔ', 'ἒ'] },
        { label: '῾', chars: ['ἑ', 'ἕ', 'ἓ'] }
      ]
    },
    'η': {
      rows: [
        { label: '',  chars: ['η', 'ή', 'ὴ', 'ῆ'] },
        { label: '᾿', chars: ['ἠ', 'ἤ', 'ἢ', 'ἦ'] },
        { label: '῾', chars: ['ἡ', 'ἥ', 'ἣ', 'ἧ'] },
        { label: 'ι', chars: ['ῃ', 'ῄ', 'ῂ', 'ῇ'] },
        { label: '᾿ι', chars: ['ᾐ', 'ᾔ', 'ᾒ', 'ᾖ'] },
        { label: '῾ι', chars: ['ᾑ', 'ᾕ', 'ᾓ', 'ᾗ'] }
      ]
    },
    'ι': {
      rows: [
        { label: '',  chars: ['ι', 'ί', 'ὶ', 'ῖ'] },
        { label: '᾿', chars: ['ἰ', 'ἴ', 'ἲ', 'ἶ'] },
        { label: '῾', chars: ['ἱ', 'ἵ', 'ἳ', 'ἷ'] }
      ],
      extra: ['ῑ']
    },
    'ο': {
      rows: [
        { label: '',  chars: ['ο', 'ό', 'ὸ'] },
        { label: '᾿', chars: ['ὀ', 'ὄ', 'ὂ'] },
        { label: '῾', chars: ['ὁ', 'ὅ', 'ὃ'] }
      ]
    },
    'υ': {
      rows: [
        { label: '',  chars: ['υ', 'ύ', 'ὺ', 'ῦ'] },
        { label: '᾿', chars: ['ὐ', 'ὔ', 'ὒ', 'ὖ'] },
        { label: '῾', chars: ['ὑ', 'ὕ', 'ὓ', 'ὗ'] }
      ],
      extra: ['ῡ']
    },
    'ω': {
      rows: [
        { label: '',  chars: ['ω', 'ώ', 'ὼ', 'ῶ'] },
        { label: '᾿', chars: ['ὠ', 'ὤ', 'ὢ', 'ὦ'] },
        { label: '῾', chars: ['ὡ', 'ὥ', 'ὣ', 'ὧ'] },
        { label: 'ι', chars: ['ῳ', 'ῴ', 'ῲ', 'ῷ'] },
        { label: '᾿ι', chars: ['ᾠ', 'ᾤ', 'ᾢ', 'ᾦ'] },
        { label: '῾ι', chars: ['ᾡ', 'ᾥ', 'ᾣ', 'ᾧ'] }
      ]
    }
  };
  // Simple lookup for has-variants check
  var accentVariants = {};
  for (var v in vowelGrid) accentVariants[v] = true;

  function renderSpellingExercise(area, exercise, onAnswer) {
    area.innerHTML = '';
    var answered = false;
    var builtWord = [];
    var activePopup = null;
    var longPressTimer = null;

    // Prompt
    var prompt = el('div', { className: 'exercise-prompt' }, [
      el('div', { className: 'prompt-label', textContent: exercise.prompt })
    ]);
    if (exercise.display) {
      var displayClass = 'prompt-text' + (exercise.displayGreek ? ' greek' : '');
      prompt.appendChild(el('div', { className: displayClass, textContent: exercise.display }));
    }
    area.appendChild(prompt);

    // Answer zone
    var answerZone = el('div', { className: 'sp-answer-zone greek' });
    area.appendChild(answerZone);

    // Hint text
    var hintDiv = el('div', { className: 'sp-hint', textContent: 'Hold a key for accent marks' });
    area.appendChild(hintDiv);

    // Letter keyboard
    var keyboardDiv = el('div', { className: 'sp-keyboard' });

    function dismissPopup() {
      if (activePopup) {
        activePopup.parentNode.removeChild(activePopup);
        activePopup = null;
      }
    }

    function insertLetter(letter) {
      if (answered) return;
      builtWord.push(letter);
      updateAnswerZone();
    }

    function updateAnswerZone() {
      answerZone.innerHTML = '';
      if (builtWord.length === 0) {
        answerZone.appendChild(el('span', { className: 'wb-placeholder', textContent: 'Tap letters below to spell the word' }));
        return;
      }
      builtWord.forEach(function(letter) {
        if (letter === ' ') {
          answerZone.appendChild(el('span', { className: 'sp-space-tile' }));
        } else {
          answerZone.appendChild(el('span', { className: 'sp-letter-tile greek', textContent: letter }));
        }
      });
    }

    function showVariantPopup(key, baseLetter) {
      dismissPopup();
      var grid = vowelGrid[baseLetter];
      if (!grid) return;

      var popup = el('div', { className: 'sp-variant-popup' });

      // Column headers
      var headerRow = el('div', { className: 'sp-vgrid-row' });
      headerRow.appendChild(el('span', { className: 'sp-vgrid-label' }));
      var colLabels = grid.rows[0].chars.length === 3
        ? ['–', '´', '`']
        : ['–', '´', '`', '˜'];
      colLabels.forEach(function(lbl) {
        headerRow.appendChild(el('span', { className: 'sp-vgrid-header', textContent: lbl }));
      });
      popup.appendChild(headerRow);

      // Character rows
      grid.rows.forEach(function(row) {
        var rowDiv = el('div', { className: 'sp-vgrid-row' });
        rowDiv.appendChild(el('span', { className: 'sp-vgrid-label', textContent: row.label }));
        row.chars.forEach(function(ch) {
          var btn = el('button', {
            className: 'sp-variant-key greek',
            textContent: ch,
            onClick: function(e) {
              e.preventDefault();
              e.stopPropagation();
              insertLetter(ch);
              dismissPopup();
            }
          });
          rowDiv.appendChild(btn);
        });
        popup.appendChild(rowDiv);
      });

      // Extra row (macron etc.)
      if (grid.extra && grid.extra.length > 0) {
        var extraRow = el('div', { className: 'sp-vgrid-row' });
        extraRow.appendChild(el('span', { className: 'sp-vgrid-label', textContent: 'ˉ' }));
        grid.extra.forEach(function(ch) {
          var btn = el('button', {
            className: 'sp-variant-key greek',
            textContent: ch,
            onClick: function(e) {
              e.preventDefault();
              e.stopPropagation();
              insertLetter(ch);
              dismissPopup();
            }
          });
          extraRow.appendChild(btn);
        });
        popup.appendChild(extraRow);
      }

      // Stop events from bubbling to the parent key
      popup.addEventListener('mousedown', function(e) { e.stopPropagation(); });
      popup.addEventListener('mouseup', function(e) { e.stopPropagation(); });
      popup.addEventListener('touchstart', function(e) { e.stopPropagation(); });
      popup.addEventListener('touchend', function(e) { e.stopPropagation(); });

      // Append to exercise area instead of key (for better positioning)
      popup.style.position = 'fixed';
      area.appendChild(popup);
      activePopup = popup;

      // Position above the key, centered
      requestAnimationFrame(function() {
        var keyRect = key.getBoundingClientRect();
        var popRect = popup.getBoundingClientRect();
        var top = keyRect.top - popRect.height - 8;
        if (top < 4) top = keyRect.bottom + 8;
        var left = keyRect.left + keyRect.width / 2 - popRect.width / 2;
        if (left < 4) left = 4;
        if (left + popRect.width > window.innerWidth - 4) left = window.innerWidth - popRect.width - 4;
        popup.style.top = top + 'px';
        popup.style.left = left + 'px';
      });
    }

    function flashKey(keyEl) {
      keyEl.classList.add('pressed');
      setTimeout(function() { keyEl.classList.remove('pressed'); }, 120);
    }

    function setupKey(key, letter) {
      var hasVariants = !!accentVariants[letter];
      if (hasVariants) {
        key.classList.add('has-variants');
      }

      var pressHandled = false;

      function startPress(e) {
        if (answered) return;
        pressHandled = false;
        if (hasVariants) {
          longPressTimer = setTimeout(function() {
            pressHandled = true;
            showVariantPopup(key, letter);
          }, 400);
        }
      }

      function endPress(e) {
        if (answered) return;
        if (longPressTimer) {
          clearTimeout(longPressTimer);
          longPressTimer = null;
        }
        if (!pressHandled && !activePopup) {
          flashKey(key);
          insertLetter(letter);
        }
      }

      function cancelPress() {
        if (longPressTimer) {
          clearTimeout(longPressTimer);
          longPressTimer = null;
        }
      }

      // Touch events
      key.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startPress(e);
      });
      key.addEventListener('touchend', function(e) {
        e.preventDefault();
        endPress(e);
      });
      key.addEventListener('touchcancel', cancelPress);

      // Mouse events (for desktop)
      key.addEventListener('mousedown', function(e) {
        e.preventDefault();
        startPress(e);
      });
      key.addEventListener('mouseup', function(e) {
        e.preventDefault();
        endPress(e);
      });
      key.addEventListener('mouseleave', cancelPress);
    }

    // Standard Greek phone keyboard layout
    var kbRows = [
      ['ς', 'ε', 'ρ', 'τ', 'υ', 'θ', 'ι', 'ο', 'π'],
      ['α', 'σ', 'δ', 'φ', 'γ', 'η', 'ξ', 'κ', 'λ'],
      ['ζ', 'χ', 'ψ', 'ω', 'β', 'ν', 'μ']
    ];

    kbRows.forEach(function(row, rowIdx) {
      var rowDiv = el('div', { className: 'sp-kb-row' });
      row.forEach(function(letter) {
        var key = el('button', { className: 'sp-key greek', textContent: letter });
        setupKey(key, letter);
        rowDiv.appendChild(key);
      });
      // Add backspace to the end of the bottom row
      if (rowIdx === 2) {
        var bksp = el('button', {
          className: 'sp-key sp-backspace-key',
          textContent: '⌫',
          onClick: function() {
            if (answered || builtWord.length === 0) return;
            flashKey(bksp);
            builtWord.pop();
            updateAnswerZone();
          }
        });
        rowDiv.appendChild(bksp);
      }
      keyboardDiv.appendChild(rowDiv);
    });

    // Space bar row
    var spaceRow = el('div', { className: 'sp-kb-row' });
    var spaceBar = el('button', {
      className: 'sp-key sp-space-key',
      textContent: 'space',
      onClick: function() {
        if (answered) return;
        flashKey(spaceBar);
        builtWord.push(' ');
        updateAnswerZone();
      }
    });
    spaceRow.appendChild(spaceBar);
    keyboardDiv.appendChild(spaceRow);

    area.appendChild(keyboardDiv);

    // Dismiss popup on tap outside
    area.addEventListener('click', function(e) {
      if (activePopup && !activePopup.contains(e.target)) {
        dismissPopup();
      }
    });

    // Controls row: just check button
    var controlsDiv = el('div', { className: 'sp-controls' });

    var checkBtn = el('button', {
      className: 'btn-continue wb-check',
      textContent: 'Check',
      onClick: function() {
        if (answered || builtWord.length === 0) return;
        answered = true;

        var userAnswer = builtWord.join('');
        var isCorrect = userAnswer === exercise.answer;

        answerZone.classList.add(isCorrect ? 'correct' : 'wrong');

        // Disable keyboard
        var keys = keyboardDiv.querySelectorAll('button');
        for (var i = 0; i < keys.length; i++) keys[i].style.pointerEvents = 'none';

        if (!isCorrect) {
          var correctDiv = el('div', { className: 'wb-correct-answer greek' }, [
            el('span', { textContent: 'Correct: ' }),
            el('span', { textContent: exercise.answer })
          ]);
          area.appendChild(correctDiv);
        }

        AudioFX.play(isCorrect ? 'correct' : 'wrong');

        checkBtn.textContent = 'Continue';
        checkBtn.classList.remove('wb-check');
        checkBtn.onclick = function() { onAnswer(isCorrect); };
      }
    });
    controlsDiv.appendChild(checkBtn);

    area.appendChild(controlsDiv);
    updateAnswerZone();
  }

  return {
    renderHome: renderHome,
    renderLesson: renderLesson,
    renderIntroExercise: renderIntroExercise,
    renderMCExercise: renderMCExercise,
    renderMatchExercise: renderMatchExercise,
    renderWordBankExercise: renderWordBankExercise,
    renderSpellingExercise: renderSpellingExercise,
    renderResults: renderResults,
    renderGameOver: renderGameOver
  };
})();
