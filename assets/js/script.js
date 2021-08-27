const chronometer = document.querySelector('#chronometer');
const timer = new Date;

function TimerZero() {
    timer.setMinutes(0);
    timer.setSeconds(0);
    timer.setMilliseconds(0);
}
TimerZero();

function WriteChronometer() {
    const minutes = (timer.getMinutes() < 10) ? '0' + timer.getMinutes() : timer.getMinutes();
    const seconds = (timer.getSeconds() < 10) ? '0' + timer.getSeconds() : timer.getSeconds();
    const milliseconds = (timer.getMilliseconds() < 10) ? '0' + timer.getMilliseconds() : timer.getMilliseconds();

    chronometer.innerHTML = `${minutes}:${seconds}:${milliseconds}`;
}
WriteChronometer();

function Counting(){
    setInterval(() => {
        let milliseconds = timer.getMilliseconds();
        milliseconds++;
        timer.setMilliseconds(milliseconds);
    }, 1);
}


document.querySelector('#start').addEventListener('click', Counting());

setInterval(WriteChronometer, 13);