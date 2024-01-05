let homeScore = 0;
let guestScore = 0;
let timerInterval = null;
let time = 10 * 60; 

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
    if (timerInterval !== null) return; 
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
    time = 10 * 60;
    updateTimerDisplay();
}

updateTimerDisplay();

