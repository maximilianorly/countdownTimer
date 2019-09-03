const userHrs = document.getElementById("hours");
const userMins = document.getElementById("minutes");
const userSecs = document.getElementById("seconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");



start.addEventListener("click", () => {
    let parsedHours = parseInt(userHrs.value);
    let hours = parsedHours * 3600000
    let parsedMinutes = parseInt(userMins.value);
    let minutes = parsedMinutes * 60000
    let parsedSeconds = parseInt(userSecs.value);
    let seconds = parsedSeconds * 1000;
    let start = hours + minutes + seconds;

    const startTimer = (duration, display) => {
    
        // let hours = userHrs * 3600;
        // let minutes = userMins * 60;
        // let seconds = userSecs * 1000
        let start = hours + minutes + seconds;
    
        const timer = () => {
            // let diff = duration - ((Date.now() - start) / 1000 | 0);
            // console.log(diff)
            // hours = (diff / 60) | 0;
            // minutes = (diff / 60) | 0;
            // seconds = (diff % 60) | 0;
    
            hours = hours < 10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            console.log(minutes)
            display.textContent = minutes + ":" + userSecs.value;
    
            // if (diff <= 0) {
            //     start = start + 1000;
            // }
        }
    
        timer();
        
        let stopwatch = setInterval(timer, 1000);
    
        stop.addEventListener("click", () => {
            console.log("stoppidystop");
            clearInterval(stopwatch, 1000);
        })
    
    }


    console.log('clickidyclick');
    let userInput = hours + minutes + seconds;
    display = document.querySelector('#time');
    startTimer(userInput, display);
    console.log(userSecs.value)
    console.log(seconds)
    // console.log(Number.isInteger(parseInt(userSecs.value)))
})