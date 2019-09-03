document.getElementById("start").addEventListener("click", () => {
    settimer()
    console.log("clicked")
})

var timer;
function settimer() {
 clearInterval(timer);

 var timer_month=parseInt(document.getElementById("months").value);
 var timer_day=parseInt(document.getElementById("days").value);
 var timer_year=parseInt(document.getElementById("years").value);
 var timer_hour=parseInt(document.getElementById("hours").value);
 if(timer_hour=="")timer_hour=0;
 var timer_min=parseInt(document.getElementById("minutes").value);
 if(timer_min=="")timer_min=0;

 var timer_date=timer_month+"/"+timer_day+"/"+timer_year+" "+timer_hour+":"+timer_min;
 console.log(timer_date)
 console.log(timer_hour)
 console.log(timer_min)
 var end = new Date(timer_date); // Arrange values in Date Time Format
//  var now = new Date(); // Get Current date time
 var second = 1000; // Total Millisecond In One Sec
 var minute = second * 60; // Total Sec In One Min
 var hour = minute * 60; // Total Min In One Hour
 var day = hour * 24; // Total Hour In One Day

 function showtimer() {
  var now = new Date();
  var remain = end - now; // Get The Difference Between Current and entered date time
  if(remain < 0) 
  {
   clearInterval(timer);
   document.getElementById("message").innerHTML = 'Reached!';
   return;
  }
  var days = Math.floor(remain / day); // Get Remaining Days
  var hours = Math.floor((remain % day) / hour); // Get Remaining Hours
  var minutes = Math.floor((remain % hour) / minute); // Get Remaining Min
  var seconds = Math.floor((remain % minute) / second); // Get Remaining Sec
 
  document.getElementById("message").innerHTML = days + 'Days ';
  document.getElementById("message").innerHTML += hours + 'Hrs ';
  document.getElementById("message").innerHTML += minutes + 'Mins ';
  document.getElementById("message").innerHTML += seconds + 'Secs';
 }
 timer = setInterval(showtimer, 1000); // Display Timer In Every 1 Sec
}