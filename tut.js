const userHrs = document.getElementById("hours");
const userMins = document.getElementById("minutes");
const userSecs = document.getElementById("seconds");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");


    
const timer = () => {
    let h = parseInt(userHrs.value) * 3600000;
    let m = parseInt(userMins.value) * 60000;
    let s = parseInt(userSecs.value) * 1000;
    console.log(`${h},${m},${s}`);

    let now = new Date();
    // let nowHours = now.getHours();
    // let nowMin = now.getMinutes();
    // let nowSec = now.getSeconds();
    let date = now.getTime();

    addHour = now.setHours(now.getHours() + h);
    addMinute = now.setMinutes(now.getMinutes() + m);
    addSecond = now.setSeconds(now.getSeconds() + s);

    let then = new Date(addHour + addMinute + addSecond);
    

    if(h > 0 || m > 0 || s > 0) {
        let final = then - date;
        let hh = Math.floor((final / (1000 * 60 * 60)) % 24);
        let mm = Math.floor((final / 1000 / 60) % 60);
        let ss = Math.floor((final / 1000) % 60);

        document.getElementById("time").innerHTML = `${hh}hours ${mm}minutes ${ss}seconds`

        

        if (final < 0) {
            clearInterval(countdownTimer);
            document.getElementById("message"). innerHTML = "expired";
        } else {
            document.getElementById("time").innerHTML = " ";
            document.getElementById("message").innerHTML = "Countdown not started";
        }

        document.getElementById("message").innerHTML = then;

    }

    
    
}


    

    const startTimer = () => {
        let countdownTimer = setInterval(timer(), 1000)
        console.log(countdownTimer)
        timer();
    }



