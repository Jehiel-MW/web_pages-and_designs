const hours = document.getElementById("hour")
const minutes = document.getElementById("minute")
const seconds = document.getElementById("second")
const millis = document.getElementById("millisecond")
const period = document.getElementById("ampm")

function ourDate() {
    let date = new Date()
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let milli = date.getMilliseconds();
    let dayPeriod = "AM";
    
    
    if(hour > 12) {
        hour = hour - 12;
        dayPeriod = "PM";
    }
    
   hour = hour < 10 ? "0" + hour : hour
   min = min < 10 ? "0" + min : min
   sec = sec < 10 ? "0" + sec : sec
    
   hours.innerText = hour;
   minutes.innerText = min
   seconds.innerText = sec
   millis.innerText = milli
   period, (innerText = dayPeriod)
    
    setTimeout(()=>{
        ourDate()
    }, 1000);
}

ourDate();
