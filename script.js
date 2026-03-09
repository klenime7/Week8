/**
 * script.js — English Test Introduction
 * Handles the "Start Test" button countdown modal.
 */

(function () {
  const btn = document.getElementById('btnStart');
  const overlay = document.getElementById('modalOverlay');
  const countdownEl = document.getElementById('countdown');

  if (!btn || !overlay || !countdownEl) return;

  btn.addEventListener('click', function () {
    startCountdown();
  });

  function startCountdown() {
    let count = 3;
    countdownEl.textContent = count;
    overlay.classList.add('active');

    // Move focus into the modal so keyboard/screen-reader users are aware it opened.
    var modalContent = document.getElementById('modalContent');
    if (modalContent) modalContent.focus();

    const interval = setInterval(function () {
      count -= 1;
      if (count > 0) {
        countdownEl.textContent = count;
      } else {
        clearInterval(interval);
        countdownEl.textContent = '🚀';
        // In a real app, redirect to the test page after a brief pause.
        setTimeout(function () {
          overlay.classList.remove('active');
          // Placeholder: alert until a test page exists.
          alert('The test is about to begin! (Redirect to test page here.)');
        }, 800);
      }
    }, 1000);
  }
})();
