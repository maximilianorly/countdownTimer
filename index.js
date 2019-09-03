const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");



function startTimer(duration, display) {

    let start = Date.now(),
        diff,
        minutes,
        seconds;

    function timer() {
        diff = duration - ((Date.now() - start) / 1000 | 0);
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
[]
        display.textContent = minutes + ":" + seconds;

        if (diff <= 0) {
            start = Date.now() + 1000;
        }
    };

    timer();
    
    let stopwatch = setInterval(timer, 1000);

    stop.addEventListener("click", () => {
        console.log("stoppidystop");
        clearInterval(stopwatch, 1000);
    })
    
}

// window.onload = function() {
//     let fiveMins = 60 * 5,
//     display = document.querySelector('#time');
//     startTimer(fiveMins, display);
// }
start.addEventListener("click", () => {
    console.log('clickidyclick');
    let fiveMins = 60 * 5,
    display = document.querySelector('#time');
    startTimer(fiveMins, display);
})



reset.addEventListener("click", () => {
    console.log("resetiddyset");
})


//reset to value
//make params for timer func => set to select menu
//link up select menu to timer input