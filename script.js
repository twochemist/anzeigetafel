let homeScore = 0;
let guestScore = 0;
let timerInterval = null;
let time = 10 * 60; // 10 minutes in seconds

function score(team, points) {
    if (team === 'home') {
        homeScore += points;
        document.getElementById('home-points').textContent = homeScore;
    } else {
        guestScore += points;
        document.getElementById('guest-points').textContent = guestScore;
    }
}

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById('timer-display').textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval !== null) return; // Timer is already running
    timerInterval = setInterval(() => {
        time--;
        updateTimerDisplay();
        if (time === 0) stopTimer();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    stopTimer();
    time = 10 * 60; // Reset to 10 minutes
    updateTimerDisplay();
}

// Initialize the timer display initially
updateTimerDisplay();

