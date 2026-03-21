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
  function renderHome(progress, onLessonTap) {
    clear();
    var titleTapCount = 0;

    var header = el('div', { className: 'home-header' }, [
      el('h1', {
        textContent: 'HELLENIKA',
        onClick: function() {
          titleTapCount++;
          if (titleTapCount >= 5) {
            titleTapCount = 0;
            var unlocked = Engine.unlockNext(progress);
            if (unlocked) {
              renderHome(Engine.getProgress(), onLessonTap);
            }
          }
        }
      }),
      el('div', { className: 'subtitle', textContent: 'Learn Attic Greek' })
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

    var path = el('div', { className: 'lesson-path' });
    var lessons = Data.lessons;
    var currentSection = '';

    for (var i = 0; i < lessons.length; i++) {
      var lesson = lessons[i];

      if (lesson.section !== currentSection) {
        currentSection = lesson.section;
        path.appendChild(el('div', { className: 'section-label', textContent: currentSection }));
      }

      if (i > 0) {
        var prevCompleted = !!progress.completed[lessons[i - 1].id];
        path.appendChild(el('div', { className: 'connector' + (prevCompleted ? ' active' : '') }));
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

      path.appendChild(node);
    }

    app.appendChild(header);
    app.appendChild(statsBar);
    app.appendChild(path);
  }

  // ===== LESSON SCREEN =====
  function renderLesson(exerciseIndex, totalExercises, hearts, onClose) {
    clear();
    var screen = el('div', { className: 'lesson-screen' });

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

  function renderHearts(hearts) {
    var div = el('div', { className: 'hearts' });
    for (var i = 0; i < 3; i++) {
      div.appendChild(el('span', {
        className: 'heart' + (i >= hearts ? ' lost' : ''),
        textContent: '🍎'
      }));
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
      card.appendChild(btn);
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
      el('div', { className: 'game-over-title', textContent: 'Out of Hearts!' }),
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

  // ===== CONFETTI =====
  function showConfetti() {
    var container = document.createElement('div');
    container.className = 'confetti-container';
    var colors = ['#FFD700', '#6C5CE7', '#00E676', '#FF5252', '#ff9ff3', '#48dbfb'];

    for (var i = 0; i < 50; i++) {
      var piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDelay = (Math.random() * 1) + 's';
      piece.style.animationDuration = (1.5 + Math.random() * 1.5) + 's';
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      piece.style.width = (6 + Math.random() * 8) + 'px';
      piece.style.height = piece.style.width;
      container.appendChild(piece);
    }

    document.body.appendChild(container);
    setTimeout(function() { container.remove(); }, 3000);
  }

  // ===== XP TOAST =====
  function showXPToast(xp) {
    var toast = document.createElement('div');
    toast.className = 'xp-toast';
    toast.textContent = '+' + xp + ' XP';
    document.body.appendChild(toast);
    setTimeout(function() { toast.remove(); }, 1500);
  }

  return {
    renderHome: renderHome,
    renderLesson: renderLesson,
    renderIntroExercise: renderIntroExercise,
    renderMCExercise: renderMCExercise,
    renderMatchExercise: renderMatchExercise,
    renderResults: renderResults,
    renderGameOver: renderGameOver
  };
})();
