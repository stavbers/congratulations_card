document.addEventListener('DOMContentLoaded', function(){
  console.log(1)




  
})

let date = new Date("1,1,2023")

// let CountDay = document.getElementById("Days")
// let CountHour = document.getElementById("Hours")
// let CountMinutes = document.getElementById("Minutes")
// let CountSeconds = document.getElementById("Seconds")
let Int = setInterval(updateTime, 1000)

function updateTime() {
  let Now = new Date().getTime()
  let distance = date - Now
  let day, hour, min, sec
  day = Math.floor(distance / (1000 * 60 * 60 * 24));
  hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  sec = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(day, hour, min, sec);


  }