document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const checkInpDay = value => value > 0 && value < 32 ? true : false
  const checkInpMonth = value => value > 0 && value < 13 ? true : false
  const checkInpYear = value => value > 1906 && value < new Date().getFullYear() ? true : false
  const removeElem = (el) => el.forEach(el => el.remove())
  const clearInp = (day, month, year) => {
    day.value = '';
    month.value = '';
    year.value = ''
  }
  const checkInputValue = (day, month, year) => {
    checkInpDay(day.value) && checkInpMonth(month.value) && checkInpYear(year.value) ? removeElem([document.querySelector('#overlay'), document.querySelector('.popup')]) : clearInp(day, month, year)
  }
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
            <input type = "button" id = "p-inpBtn"value = "Сontinue" >
          </div>
        </div>`)
  const app = createElem(`
        <div class="app-wrp">
          <h2 class="app-wrp__title">Birthday Countdown</h2>
          <p class="app-wrp__countdown">Осталось 24 дня 40 часов 59 минут и 6 сек</p>
          <h4 class="app-wrp__subtitle">text felicitation</h4>
          <div class="app-wrp__note">
            <div class="saved">Saved...</div>
            <textarea name="text" id="felic-text" cols="30" rows="10"></textarea>
            </div>
          </div>`)
  addElem(overlay)
  addElem(popup)
  const overlayEl = document.querySelector('#overlay')
  const popupEl = document.querySelector('.popup')

  document.querySelector('#p-inpBtn').addEventListener('click', () => {
    const inpDay = document.querySelector('#p-inpDay')
    const inpMon = document.querySelector('#p-inpMon')
    const inpYear = document.querySelector('#p-inpY')
    checkInputValue(inpDay, inpMon, inpYear)
    addElem(app, body.querySelector('#App'))
  })

  document.addEventListener('keydown', (e)=> {
    // console.log(e.code)
  e.code == 'Escape' && document.querySelector('#p-inpY')
  ? [removeElem([overlayEl, popupEl]), addElem(app, body.querySelector('#App'))]
  : false
})
  overlayEl.addEventListener('click', (e)=> {
  removeElem([overlayEl, popupEl])
  addElem(app, body.querySelector('#App'))
})

})




let date = new Date("1,1,2023")
console.log(date)
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



}