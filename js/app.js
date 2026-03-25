var App = (function() {

  var state = {
    screen: 'home',  // home | lesson | results | gameover
    currentLesson: null,
    exercises: [],
    exerciseIndex: 0,
    hearts: 3,
    correctCount: 0,
    gradedCount: 0
  };

  function init() {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(function() {});
    }
    showHome();
  }

  function showHome() {
    state.screen = 'home';
    var progress = Engine.getProgress();
    UI.renderHome(progress, startLesson);
  }

  function startLesson(lesson) {
    state.screen = 'lesson';
    state.currentLesson = lesson;
    state.exercises = Engine.generateExercises(lesson);
    state.exerciseIndex = 0;
    state.hearts = 3;
    state.correctCount = 0;
    state.gradedCount = 0;
    showExercise();
  }

  function showExercise() {
    if (state.exerciseIndex >= state.exercises.length) {
      finishLesson();
      return;
    }

    var ex = state.exercises[state.exerciseIndex];
    var area = UI.renderLesson(
      state.exerciseIndex,
      state.exercises.length,
      state.hearts,
      function() { showHome(); }
    );

    switch (ex.type) {
      case 'intro':
        UI.renderIntroExercise(area, ex, function() {
          state.exerciseIndex++;
          showExercise();
        });
        break;
      case 'mc':
        UI.renderMCExercise(area, ex, function(isCorrect) {
          if (ex.graded) {
            state.gradedCount++;
            if (isCorrect) {
              state.correctCount++;
            } else {
              state.hearts--;
              if (state.hearts <= 0) {
                gameOver();
                return;
              }
            }
          }
          state.exerciseIndex++;
          showExercise();
        });
        break;
      case 'match':
        UI.renderMatchExercise(area, ex, function() {
          state.exerciseIndex++;
          showExercise();
        });
        break;
      case 'word-bank':
        UI.renderWordBankExercise(area, ex, function(isCorrect) {
          if (ex.graded) {
            state.gradedCount++;
            if (isCorrect) {
              state.correctCount++;
            } else {
              state.hearts--;
              if (state.hearts <= 0) {
                gameOver();
                return;
              }
            }
          }
          state.exerciseIndex++;
          showExercise();
        });
        break;
      case 'spelling':
        UI.renderSpellingExercise(area, ex, function(isCorrect) {
          if (ex.graded) {
            state.gradedCount++;
            if (isCorrect) {
              state.correctCount++;
            } else {
              state.hearts--;
              if (state.hearts <= 0) {
                gameOver();
                return;
              }
            }
          }
          state.exerciseIndex++;
          showExercise();
        });
        break;
      default:
        state.exerciseIndex++;
        showExercise();
    }
  }

  function finishLesson() {
    var accuracy = state.gradedCount > 0
      ? Math.round((state.correctCount / state.gradedCount) * 100)
      : 100;
    var stars = Engine.calcStars(accuracy);
    var xp = Engine.calcXP(stars, accuracy);

    Engine.completeLesson(state.currentLesson.id, stars, xp, accuracy);

    UI.renderResults(stars, xp, accuracy, function() {
      showHome();
    });
  }

  function gameOver() {
    UI.renderGameOver(
      function() { startLesson(state.currentLesson); },
      function() { showHome(); }
    );
  }

  // Auto-init
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  return { init: init };
})();
