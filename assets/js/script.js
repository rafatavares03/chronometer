const chronometer = document.querySelector('#chronometer');
const timer = new Date;

function TimerZero() {
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMilliseconds(0);
}

TimerZero();

function WriteChronometer() {
    let minutes = (timer.getMinutes() < 10) ? '0' + timer.getMinutes() : timer.getMinutes();
    let seconds = (timer.getSeconds() < 10) ? '0' + timer.getSeconds() : timer.getSeconds();
    let milliseconds = (timer.getMilliseconds() < 10) ? '0' + timer.getMilliseconds() : timer.getMilliseconds();

    chronometer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}

WriteChronometer();

setInterval(WriteChronometer, 13);