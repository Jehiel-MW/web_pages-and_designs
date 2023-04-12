const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

function digitalWallClock() {
    
    const dayTime = new Date();
    setTimeout(()=>{
    digitalWallClock
    }, 1000);
    const myHour = dayTime.getHours();
    const myMinute = dayTime.getMinutes();
    const mySecond = dayTime.getSeconds();
    
    
    const analogHour = ((myHour/12) * 360);l  
    const analogMinute = ((myMinute/60) * 360);   
    const analogSecond = ((mySecond/60) * 360);
    
    /*hourHand.innerText = analogHour
    minuteHand.innerText = analogMinute
    secondHand.innerText = analogSecond
    */
   hourHand.style.transfom = `rotate($(analogHour)deg)`;
    minuteHand.style.transfom = `rotate($(analogMinute)deg)`;
    secondHand.style.transfom = `rotate($(analogSecond)deg)`;
    
} 
