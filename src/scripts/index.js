document.addEventListener('DOMContentLoaded', () => {
      const body = document.querySelector('body')
      const inpDay = document.querySelector('#inpDay')
      const inpMon = document.querySelector('#inpMon')
      const inpYear = document.querySelector('#inpY')

      const createElem = elem => `${elem}`
      const addElem = (elem, out = body) => out.insertAdjacentHTML('beforeend', elem)
      const overlay = createElem('<div id="overlay"></div>')
      const popup = createElem(`
        <div class="popup ">
          <h4 class="popup__title">Please enter date of birth</h4>
          <div class="popup__inp">
            <input type="text" id="p-inpDay" placeholder="Day">
            <input type="text" id="p-inpMon" placeholder="Month">
            <input type="text" id="p-inpY" placeholder="Year">
          </div>
        </div>`)

      addElem(overlay)
      addElem(popup)
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

  // console.log(day, hour, min, sec);


}