let hr = '0' + 0;
let min = '0' + 0;
let sec = '0' + 0;
let ms = '0' + 0;

let startTimer;

const startBtn =  document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

startBtn.addEventListener('click', () => {
    startBtn.classList.add('active')
    stopBtn.classList.remove('stopActive');

    startTimer = setInterval(() => {
        ms++;

        ms = ms < 10 ? '0' + ms : ms;

        if (ms == 100) {
            sec++;
            sec = sec < 10 ? '0' + sec : sec;
            ms = '0' + 0;
        }

        if (sec == 60) {
            min++;

            min = min < 10 ? '0' + min : min;

            sec = '0' + 0;
        }

        if (min == 60) {
            hr++;

            hr = hs < 10 ? '0' + hr : hr;

            min = '0' + 0;
        }

        putValue();
    }, 10);
})

stopBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.add('sstopActive');
    clearInterval(startTimer);
})

resetBtn.addEventListener('click', () => {
    startBtn.classList.remove('active');
    stopBtn.classList.remove('stopActive');
    
    clearInterval(startTimer);

    hr = min = sec = ms = '0' + 0;

    putValue();
})

function putValue() {
    document.querySelector('.millisecond').innerHTML = ms;
    document.querySelector('.second').innerHTML = sec;
    document.querySelector('.minute').innerHTML = min;
    document.querySelector('.hour').innerHTML = hr;
}