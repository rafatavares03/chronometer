const chronometer = document.querySelector('#chronometer');
const timer = new Date;



function WriteChronometer() {
    const minutes = (timer.getMinutes() < 10) ? '0' + timer.getMinutes() : timer.getMinutes();
    const seconds = (timer.getSeconds() < 10) ? '0' + timer.getSeconds() : timer.getSeconds();
    const milliseconds = ((timer.getMilliseconds() / 10) < 10) ? '0' + timer.getMilliseconds() / 10 : timer.getMilliseconds() / 10;

    chronometer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}

function TimerZero() {
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMilliseconds(0);
    WriteChronometer();
}
TimerZero();


document.querySelector('#start').addEventListener('click', function Counting() {
    timer.interval = setInterval(() => {
        let milliseconds = timer.getMilliseconds();
        milliseconds += 120;
        timer.setMilliseconds(milliseconds);
        WriteChronometer();
    }, 120);
});

document.querySelector('#pause').addEventListener('click', function StopCounting() {
    clearInterval(timer.interval);
});

document.querySelector('#restart').addEventListener('click', function Restart() {
    clearInterval(timer.interval);
    TimerZero();
})