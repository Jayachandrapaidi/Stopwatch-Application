// Select elements
const timerDisplay = document.querySelector('.timerDisplay');
const stopBtn = document.getElementById('stopBtn');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

// Time variables
let msec = 0, secs = 0, mins = 0;
let timerId = null;

// Start Button
startBtn.addEventListener('click', () => {
    if (timerId) clearInterval(timerId);
    timerId = setInterval(startTimer, 10);
});

// Stop Button
stopBtn.addEventListener('click', () => {
    clearInterval(timerId);
});

// Reset Button
resetBtn.addEventListener('click', () => {
    clearInterval(timerId);
    msec = secs = mins = 0;
    updateDisplay();
});

// Timer Logic
function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        secs++;
        if (secs === 60) {
            secs = 0;
            mins++;
        }
    }
    updateDisplay();
}

// Update Display
function updateDisplay() {
    const formattedMsec = msec.toString().padStart(2, '0');
    const formattedSecs = secs.toString().padStart(2, '0');
    const formattedMins = mins.toString().padStart(2, '0');
    timerDisplay.textContent = `${formattedMins} : ${formattedSecs} : ${formattedMsec}`;
}
