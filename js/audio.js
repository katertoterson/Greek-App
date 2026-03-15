var AudioFX = (function() {
  var ctx = null;

  function getCtx() {
    if (!ctx) {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    return ctx;
  }

  function play(type) {
    try {
      var c = getCtx();
      var o = c.createOscillator();
      var g = c.createGain();
      o.connect(g);
      g.connect(c.destination);

      switch (type) {
        case 'correct':
          o.type = 'sine';
          o.frequency.setValueAtTime(523, c.currentTime);
          o.frequency.setValueAtTime(659, c.currentTime + 0.1);
          o.frequency.setValueAtTime(784, c.currentTime + 0.2);
          g.gain.setValueAtTime(0.15, c.currentTime);
          g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.4);
          o.start(c.currentTime);
          o.stop(c.currentTime + 0.4);
          break;
        case 'wrong':
          o.type = 'square';
          o.frequency.setValueAtTime(200, c.currentTime);
          o.frequency.setValueAtTime(150, c.currentTime + 0.15);
          g.gain.setValueAtTime(0.1, c.currentTime);
          g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.3);
          o.start(c.currentTime);
          o.stop(c.currentTime + 0.3);
          break;
        case 'tap':
          o.type = 'sine';
          o.frequency.setValueAtTime(600, c.currentTime);
          g.gain.setValueAtTime(0.05, c.currentTime);
          g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.08);
          o.start(c.currentTime);
          o.stop(c.currentTime + 0.08);
          break;
        case 'complete':
          o.type = 'sine';
          o.frequency.setValueAtTime(523, c.currentTime);
          o.frequency.setValueAtTime(659, c.currentTime + 0.15);
          o.frequency.setValueAtTime(784, c.currentTime + 0.3);
          o.frequency.setValueAtTime(1047, c.currentTime + 0.45);
          g.gain.setValueAtTime(0.15, c.currentTime);
          g.gain.exponentialRampToValueAtTime(0.01, c.currentTime + 0.7);
          o.start(c.currentTime);
          o.stop(c.currentTime + 0.7);
          break;
      }
    } catch (e) {}
  }

  return { play: play };
})();
