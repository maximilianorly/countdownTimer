const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const userHrs = document.getElementById("hours");
const userMins = document.getElementById("minutes");
const userSecs = document.getElementById("seconds");
const displayH = document.getElementById("displayH");
const displayM = document.getElementById("displayM");
const displayS = document.getElementById("displayS");
const message = document.getElementById("message");
// const front = document.getElementsByClassName("front");
const confirm = document.getElementById("confirm");
const card = document.getElementById("card");




const startTimer = () => {
    console.log(userHrs.value+"userHrs");
    console.log(userMins.value+"userMins");
    console.log(userSecs.value+"userSecs");
    function timer() {
        let seconds = parseInt(userSecs.value) + 1;
        console.log(seconds)
        let minutes = parseInt(userMins.value) * 60;
        let hours = parseInt(userHrs.value) * 3600;
        let fullTime = hours + minutes + seconds;
        console.log(`${hours},${minutes},${seconds},`);
        console.log(fullTime+"fullTime");

        let second = 1;
        let minute = second * 60 ; //here (- 1)
        let hour = minute * 60;
        let day = hour * 24;
        console.log(minute)
        
        
        display = () => {

            if (fullTime == 0) {
                clearInterval(stopwatch)
                message.innerHTML = "Times Up!"
                start.disabled = false;
                return;
            } else {
                fullTime--
                start.disabled = true;
            }

            let hrs = Math.floor((fullTime % day) / hour); //+second starts from correct time but "here" takes away "59"
            let mins = Math.floor((fullTime % hour) / minute);
            let secs = Math.floor((fullTime % minute) / second);

            hrs = hrs < 10 && hrs > 0 ? "0" + hrs : hrs;
            mins = mins < 10 ? "0" + mins : mins;
            if (mins == 0) {
                secs = secs < 10 ? "0" + secs : secs;
            } else {
                secs = secs < 10 ? "0" + secs : secs;
            }

            if (hrs == 1) {
                message.innerHTML = `${hrs} Hour`;
                message.innerHTML += `${mins} Minutes`;
                message.innerHTML += `${secs} Seconds remaining.`;
            } else if (mins == 1){
                message.innerHTML = `${hrs} Hours`;
                message.innerHTML += `${mins} Minute`;
                message.innerHTML += `${secs} Seconds remaining.`;
            } else if (secs == 1){
                message.innerHTML = `${hrs} Hours`;
                message.innerHTML += `${mins} Minutes`;
                message.innerHTML += `${secs} Second remaining.`;
            } else {
                message.innerHTML = `${hrs} Hours`;
                message.innerHTML += `${mins} Minutes`;
                message.innerHTML += `${secs} Seconds remaining.`;
            }

        }
        
        stopwatch = setInterval(display, 1000);
        
        reset.addEventListener("click", () => {
            fullTime = "0";
        })
    }
    
    timer();
    
    stop.addEventListener("click", () => {
        console.log("stoppidystop");
        clearInterval(stopwatch, 1000);
    })
    
}

start.addEventListener("click", () => {
    startTimer();
    console.log("flipped")
    // front.innerHTML = " "
    card.classList.toggle('flipped');
}, false)

reset.addEventListener("click", () => {
    fullTime = "0";
})
// setTimeout(function(){
//     document.querySelector('.green .half.right').classList.add('rotate');
// }, 1000);

// confirm.addEventListener("click", () => {
//     userHrs.toggle('flipped');
//     userMins.toggle('flipped');
//     userSecs.toggle('flipped');
// }, false)

// document.getElementById('flip').addEventListener('click', () => {
//     console.log("flipped")
//     card.classList.toggle('flipped');
// }, false);




// }else if (hrs && mins == 1) {
            //     message.innerHTML = `${hrs} Hour`;
            //     message.innerHTML += `${mins} Minute`;
            //     message.innerHTML += `${secs} Seconds remaining.`;
            // } else if (mins && secs == 1) {
            //     message.innerHTML = `${hrs} Hours`;
            //     message.innerHTML += `${mins} Minute`;
            //     message.innerHTML += `${secs} Second remaining.`;
            // } else if (hrs && secs) {
            //     message.innerHTML = `${hrs} Hour`;
            //     message.innerHTML += `${mins} Minutes`;
            //     message.innerHTML += `${secs} Second remaining.`;
            // } else if (hrs && mins && secs == 1) {
            //     message.innerHTML = `${hrs} Hour`;
            //     message.innerHTML += `${mins} Minute`;
            //     message.innerHTML += `${secs} Second remaining.`;