var Engine = (function() {

  var STORAGE_KEY = 'hellenika_progress';

  // ===== Utility =====
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function pick(arr, n, exclude) {
    var pool = exclude ? arr.filter(function(x) { return x !== exclude; }) : arr.slice();
    return shuffle(pool).slice(0, n);
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // ===== Progress =====
  function getProgress() {
    var defaults = { completed: {}, totalXP: 0, streak: 0, lastPlayDate: null };
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var p = JSON.parse(raw);
        p.completed = p.completed || {};
        p.totalXP = p.totalXP || 0;
        p.streak = p.streak || 0;
        return p;
      }
    } catch (e) {}
    return defaults;
  }

  function saveProgress(p) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
    } catch (e) {}
  }

  function completeLesson(lessonId, stars, xp, accuracy) {
    var p = getProgress();
    var prev = p.completed[lessonId];
    if (!prev || stars > prev.stars) {
      p.completed[lessonId] = { stars: stars, xp: xp };
    }
    p.totalXP = (p.totalXP || 0) + xp;

    // Streak
    var today = new Date().toDateString();
    if (p.lastPlayDate) {
      var last = new Date(p.lastPlayDate);
      var diff = Math.floor((new Date(today) - last) / 86400000);
      if (diff === 1) {
        p.streak = (p.streak || 0) + 1;
      } else if (diff > 1) {
        p.streak = 1;
      }
    } else {
      p.streak = 1;
    }
    p.lastPlayDate = today;

    saveProgress(p);
    return p;
  }

  function calcStars(accuracy) {
    if (accuracy >= 95) return 3;
    if (accuracy >= 75) return 2;
    return 1;
  }

  function calcXP(stars, accuracy) {
    return 10 + (stars * 5) + Math.round(accuracy / 10);
  }

  function isLessonUnlocked(lessonId, progress) {
    if (lessonId === 1) return true;
    return !!progress.completed[lessonId - 1];
  }

  function unlockNext(progress) {
    var lessons = Data.lessons;
    for (var i = 0; i < lessons.length; i++) {
      var id = lessons[i].id;
      if (!progress.completed[id] && !isLessonUnlocked(id, progress)) {
        // Unlock by completing the previous lesson minimally
        progress.completed[id - 1] = progress.completed[id - 1] || { stars: 1, xp: 10 };
        saveProgress(progress);
        return id;
      }
    }
    return null;
  }

  // ===== Exercise Generation =====
  function generateExercises(lesson) {
    var exercises = [];
    var defs = lesson.exercises;

    for (var i = 0; i < defs.length; i++) {
      var def = defs[i];
      var ex = generateExercise(def);
      if (ex) exercises.push(ex);
    }
    return exercises;
  }

  function getLetterPool(group) {
    if (group === 'all') return Data.alphabet;
    return Data.alphaGroups[group];
  }

  function generateExercise(def) {
    switch (def.type) {
      case 'intro':
        return generateIntro(def);
      case 'mc-name':
        return generateMCName(def);
      case 'mc-letter':
        return generateMCLetter(def);
      case 'mc-sound':
        return generateMCSound(def);
      case 'mc-translate':
        return generateMCTranslate(def);
      case 'match':
        return generateMatch(def);
      case 'vocab-intro':
        return generateVocabIntro(def);
      case 'vocab-gre':
        return generateVocabGre(def);
      case 'vocab-eng':
        return generateVocabEng(def);
      case 'vocab-match':
        return generateVocabMatch(def);
      case 'vocab-gender':
        return generateVocabGender(def);
      case 'vocab-article':
        return generateVocabArticle(def);
      case 'u2vocab-intro':
        return generateU2VocabIntro(def);
      case 'u2vocab-gre':
        return generateU2VocabGre(def);
      case 'u2vocab-eng':
        return generateU2VocabEng(def);
      case 'u2vocab-match':
        return generateU2VocabMatch(def);
      case 'u2vocab-gender':
        return generateU2VocabGender(def);
      case 'verb-form-id':
        return generateVerbFormId(def);
      case 'verb-form-select':
        return generateVerbFormSelect(def);
      default:
        return null;
    }
  }

  function generateIntro(def) {
    var cards = def.cards.map(function(c) {
      return {
        html: typeof c.html === 'function' ? c.html() : c.html
      };
    });
    return { type: 'intro', title: def.title, cards: cards, graded: false };
  }

  function generateMCName(def) {
    var pool = getLetterPool(def.group);
    var target = pickRandom(pool);
    var distractors = pick(Data.alphabet.map(function(l) { return l.name; }), 3, target.name);
    var options = shuffle([target.name].concat(distractors));
    return {
      type: 'mc',
      graded: true,
      prompt: 'What is this letter called?',
      display: target.upper + ' ' + target.lower,
      displayGreek: true,
      correct: target.name,
      options: options
    };
  }

  function generateMCLetter(def) {
    var pool = getLetterPool(def.group);
    var target = pickRandom(pool);
    var distractors = pick(Data.alphabet.map(function(l) { return l.upper + ' ' + l.lower; }), 3, target.upper + ' ' + target.lower);
    var options = shuffle([target.upper + ' ' + target.lower].concat(distractors));
    return {
      type: 'mc',
      graded: true,
      prompt: 'Which letter is ' + target.name + '?',
      display: target.name,
      correct: target.upper + ' ' + target.lower,
      options: options,
      optionsGreek: true
    };
  }

  function generateMCSound(def) {
    var pool = getLetterPool(def.group);
    var target = pickRandom(pool);
    var distractors = pick(Data.alphabet.map(function(l) { return l.pron; }), 3, target.pron);
    var options = shuffle([target.pron].concat(distractors));
    return {
      type: 'mc',
      graded: true,
      prompt: 'What sound does ' + target.name + ' (' + target.lower + ') make?',
      display: target.upper + ' ' + target.lower,
      displayGreek: true,
      correct: target.pron,
      options: options
    };
  }

  function generateMCTranslate(def) {
    var options = def.options ? shuffle(def.options.slice()) : [];
    return {
      type: 'mc',
      graded: true,
      prompt: def.prompt,
      display: def.display || '',
      displayGreek: !!def.displayGreek,
      correct: def.correct,
      options: options,
      optionsGreek: !!def.optionsGreek
    };
  }

  function generateMatch(def) {
    // If pairs are pre-defined
    if (def.pairs) {
      var pairs = shuffle(def.pairs.slice()).slice(0, 5);
      return {
        type: 'match',
        graded: false,
        pairs: pairs
      };
    }

    // Alphabet matching
    var pool = getLetterPool(def.group);
    var selected = shuffle(pool.slice()).slice(0, 5);
    var pairs;

    if (def.matchType === 'name') {
      pairs = selected.map(function(l) {
        return [l.upper + ' ' + l.lower, l.name];
      });
    } else if (def.matchType === 'sound') {
      pairs = selected.map(function(l) {
        return [l.name, l.pron];
      });
    } else {
      pairs = selected.map(function(l) {
        return [l.upper + ' ' + l.lower, l.name];
      });
    }

    return {
      type: 'match',
      graded: false,
      pairs: pairs
    };
  }

  // ===== Vocabulary Exercise Generators =====

  function generateVocabIntro(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var cards = words.map(function(w) {
      return {
        html: '<div class="vocab-card">' +
          '<div class="vocab-article">' + w.article + '</div>' +
          '<div class="vocab-greek">' + w.greek + '</div>' +
          '<div class="vocab-english">' + w.english + '</div>' +
          '<div class="vocab-gender">' + w.declension + ' declension, ' + w.gender + '</div>' +
          '</div>'
      };
    });
    return { type: 'intro', title: 'New Vocabulary', cards: cards, graded: false };
  }

  function generateVocabGre(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var target = pickRandom(words);
    var pool = Data.unit1VocabAll.filter(function(w) { return w.english !== target.english; });
    var distractors = pick(pool.map(function(w) { return w.english; }), 3);
    return {
      type: 'mc',
      graded: true,
      prompt: 'What does this word mean?',
      display: target.article + ' ' + target.greek,
      displayGreek: true,
      correct: target.english,
      options: shuffle([target.english].concat(distractors))
    };
  }

  function generateVocabEng(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var target = pickRandom(words);
    var pool = Data.unit1VocabAll.filter(function(w) { return w.greek !== target.greek; });
    var distractors = pick(pool.map(function(w) { return w.greek; }), 3);
    return {
      type: 'mc',
      graded: true,
      prompt: 'What is "' + target.english + '" in Greek?',
      display: target.english,
      correct: target.greek,
      options: shuffle([target.greek].concat(distractors)),
      optionsGreek: true
    };
  }

  function generateVocabMatch(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var selected = shuffle(words.slice()).slice(0, 5);
    var pairs = selected.map(function(w) { return [w.greek, w.english]; });
    return { type: 'match', graded: false, pairs: pairs };
  }

  function generateVocabGender(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var target = pickRandom(words);
    return {
      type: 'mc',
      graded: true,
      prompt: 'What gender is this noun?',
      display: target.article + ' ' + target.greek,
      displayGreek: true,
      correct: target.gender,
      options: shuffle(['masculine', 'feminine', 'neuter', 'no fixed gender'])
    };
  }

  function generateVocabArticle(def) {
    var words = Data.unit1Vocab[def.vocabGroup];
    var target = pickRandom(words);
    return {
      type: 'mc',
      graded: true,
      prompt: 'Which article goes with this noun?',
      display: target.greek,
      displayGreek: true,
      correct: target.article,
      options: shuffle(['ὁ', 'ἡ', 'τό', 'οἱ']),
      optionsGreek: true
    };
  }

  // ===== Unit 2 Vocabulary Exercise Generators =====

  function generateU2VocabIntro(def) {
    var words = Data.unit2Vocab[def.vocabGroup];
    var cards = words.map(function(w) {
      return {
        html: '<div class="vocab-card">' +
          '<div class="vocab-article">' + w.article + '</div>' +
          '<div class="vocab-greek">' + w.greek + '</div>' +
          '<div class="vocab-english">' + w.english + '</div>' +
          '<div class="vocab-gender">' + w.declension + ' declension, ' + w.gender + '</div>' +
          '</div>'
      };
    });
    return { type: 'intro', title: 'New Vocabulary', cards: cards, graded: false };
  }

  function generateU2VocabGre(def) {
    var words = Data.unit2Vocab[def.vocabGroup];
    var target = pickRandom(words);
    var pool = Data.allVocabAll.filter(function(w) { return w.english !== target.english; });
    var distractors = pick(pool.map(function(w) { return w.english; }), 3);
    return {
      type: 'mc', graded: true,
      prompt: 'What does this word mean?',
      display: target.article + ' ' + target.greek,
      displayGreek: true, correct: target.english,
      options: shuffle([target.english].concat(distractors))
    };
  }

  function generateU2VocabEng(def) {
    var words = Data.unit2Vocab[def.vocabGroup];
    var target = pickRandom(words);
    var pool = Data.allVocabAll.filter(function(w) { return w.greek !== target.greek; });
    var distractors = pick(pool.map(function(w) { return w.greek; }), 3);
    return {
      type: 'mc', graded: true,
      prompt: 'What is "' + target.english + '" in Greek?',
      display: target.english, correct: target.greek,
      options: shuffle([target.greek].concat(distractors)),
      optionsGreek: true
    };
  }

  function generateU2VocabMatch(def) {
    var words = Data.unit2Vocab[def.vocabGroup];
    var selected = shuffle(words.slice()).slice(0, 5);
    var pairs = selected.map(function(w) { return [w.greek, w.english]; });
    return { type: 'match', graded: false, pairs: pairs };
  }

  function generateU2VocabGender(def) {
    var words = Data.unit2Vocab[def.vocabGroup];
    var target = pickRandom(words);
    return {
      type: 'mc', graded: true,
      prompt: 'What gender is this noun?',
      display: target.article + ' ' + target.greek,
      displayGreek: true, correct: target.gender,
      options: shuffle(['masculine', 'feminine', 'neuter', 'no fixed gender'])
    };
  }

  // ===== Verb Conjugation Exercise Generators =====

  function generateVerbFormId(def) {
    var verb = Data.unit2Verbs[def.verbIndex];
    var tense = def.tense;
    var forms = verb[tense];
    var labels = Data.personLabels;
    var idx = Math.floor(Math.random() * 6);
    var form = forms[idx];
    var label = labels[idx];

    var tenseNames = { present: 'present', imperfect: 'imperfect', future: 'future', aorist: 'aorist' };
    var correctAnswer = label + ', ' + tenseNames[tense] + ' ind. act.';

    // Build distractors from other person/number combos and other tenses
    var allTenses = ['present', 'imperfect', 'future', 'aorist'];
    var distractorPool = [];
    allTenses.forEach(function(t) {
      labels.forEach(function(l) {
        var ans = l + ', ' + tenseNames[t] + ' ind. act.';
        if (ans !== correctAnswer) distractorPool.push(ans);
      });
    });
    var distractors = pick(distractorPool, 3);

    return {
      type: 'mc', graded: true,
      prompt: 'Identify this verb form:',
      display: form,
      displayGreek: true,
      correct: correctAnswer,
      options: shuffle([correctAnswer].concat(distractors))
    };
  }

  function generateVerbFormSelect(def) {
    var verb = Data.unit2Verbs[def.verbIndex];
    var tense = def.tense;
    var forms = verb[tense];
    var labels = Data.personLabels;
    var idx = Math.floor(Math.random() * 6);
    var correctForm = forms[idx];
    var label = labels[idx];

    var tenseNames = { present: 'present', imperfect: 'imperfect', future: 'future', aorist: 'aorist' };
    var prompt = 'Select the ' + label + ' ' + tenseNames[tense] + ' ind. act. of ' + verb.verb + ':';

    // Build distractors from other forms of same verb
    var allForms = [];
    ['present', 'imperfect', 'future', 'aorist'].forEach(function(t) {
      verb[t].forEach(function(f) {
        if (f !== correctForm) allForms.push(f);
      });
    });
    var distractors = pick(allForms, 3);

    return {
      type: 'mc', graded: true,
      prompt: prompt,
      correct: correctForm,
      options: shuffle([correctForm].concat(distractors)),
      optionsGreek: true
    };
  }

  return {
    getProgress: getProgress,
    saveProgress: saveProgress,
    completeLesson: completeLesson,
    calcStars: calcStars,
    calcXP: calcXP,
    isLessonUnlocked: isLessonUnlocked,
    unlockNext: unlockNext,
    generateExercises: generateExercises,
    shuffle: shuffle
  };
})();
