document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const checkInpDay = value => value.trim() > 0 && value.trim() < 32  ? true : false
  const checkInpMonth = value => value.trim() > 0 && value.trim() < 13  ? true : false
  const checkInpYear = value => value.trim() > 1906 && value.trim() < new Date().getFullYear() ? true : false
  const removeElem = (el) => el.forEach(el => el.remove())
  const clearInp = (day, month, year) => {
    day.value = '';
    month.value = '';
    year.value = '' }

  const checkInputValue = (day, month, year) => { 
    (checkInpDay(day.value) && checkInpMonth(month.value) && checkInpYear(year.value))
     ? [removeElem([document.querySelector('#overlay'), document.querySelector('.popup')]), addElem(app, body.querySelector('#App'))] 
     : [clearInp(day, month, year), false]
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
    // const cd = document.querySelector('.app-wrp__countdown')
    // const dateArr = []
    checkInputValue(inpDay, inpMon, inpYear)
    countDown
  })

  document.addEventListener('keydown', (e)=> {
  e.code == 'Escape' && document.querySelector('#p-inpY')
  ? [removeElem([overlayEl, popupEl]), addElem(app, body.querySelector('#App'))]
  : false
})
  overlayEl.addEventListener('click', (e)=> {
  removeElem([overlayEl, popupEl])
  addElem(app, body.querySelector('#App'))
})

const countDown = (arr)=> {
  const date = new Date('12,24,1991')
}


})

// если день и месяц больше текущего то что-то делать


const nowDate = new Date()
console.log(date.getTime())
console.log(nowDate.getTime())
// console.log(date.getMonth())
// setInterval(countDown, 1000)

function countDown() {
  let Now = new Date().getTime()
  let distance = date - Now
  let month, day, hour, min, sec
  month = Math.floor(diff / 1000 / 60 / 60 / 31) % 12
  day = Math.floor(distance / (1000 * 60 * 60 * 24));
  hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  sec = Math.floor((distance % (1000 * 60)) / 1000);

console.log(day,hour, min, sec)

}