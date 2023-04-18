const startstopBtn = document.querySelector("#startstopBtn");
const resetBtn = document.querySelector("#resetBtn");
const screen = document.getElementById("timer");

let seconds = minutes = hours = 0;
let intervalTimer = null;
let timerStatus = 'stopped';

function stopwatch(){
    seconds++;
    if(seconds/60 === 1){
        seconds = 0;
        minutes++;
        if(minutes/60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        seconds = seconds.toString().padStart(2, '0');
    }
    if(minutes < 10){
        minutes = minutes.toString().padStart(2, '0');
    }
    if(hours < 10){
        hours = hours.toString().padStart(2, '0');
    }
    let count = screen.innerText = hours + ':' + minutes + ':' + seconds;
}


startstopBtn.addEventListener('click', function(){
    if(timerStatus === 'stopped'){
        intervalTimer = window.setInterval(stopwatch, 1000);
        timerStatus = 'started';
        startstopBtn.innerText = 'PAUSE';
    }
    else if (timerStatus === 'started'){
        window.clearInterval(intervalTimer);
        timerStatus = 'stopped';
        startstopBtn.innerText = 'PLAY';
    }
});

resetBtn.addEventListener('click', function(){
    window.clearInterval(intervalTimer);
    timerStatus = 'stopped';
    startstopBtn.innerText = 'PLAY';
    screen.innerText = '00:00:00';
    seconds = minutes = hours = 0;
});
