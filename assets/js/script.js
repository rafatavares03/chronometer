const chronometer = document.querySelector('#chronometer');
const timer = new Date;
let counting = false;



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


document.querySelector('#start').addEventListener('click', function Count() {
    if(!counting) {
        counting = setInterval(() => {
            let milliseconds = timer.getMilliseconds();
            milliseconds += 120;
            timer.setMilliseconds(milliseconds);
            WriteChronometer();
        }, 120);
    }
});

document.querySelector('#pause').addEventListener('click', function StopCount() {
    clearInterval(counting);
    counting = false;
});

document.querySelector('#restart').addEventListener('click', function Restart() {
    clearInterval(counting);
    counting = false;
    TimerZero();
})