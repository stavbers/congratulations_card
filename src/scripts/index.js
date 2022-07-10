document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const checkInpDay = value => value.trim() > 0 && value.trim() < 32 ? true : false
  const checkInpMonth = value => value.trim() > 0 && value.trim() < 13 ? true : false
  const checkInpYear = value => value.trim() > 1906 && value.trim() < new Date().getFullYear() ? true : false
  const removeElem = (el) => el.forEach(el => el.remove())
  const clearInp = (day, month, year) => {
    day.value = '';
    month.value = '';
    year.value = ''
  }

  const checkInputValue = (day, month, year) => {
    (checkInpDay(day.value) && checkInpMonth(month.value) && checkInpYear(year.value)) ?
    [removeElem([document.querySelector('#overlay'), document.querySelector('.popup')]), addElem(app, body.querySelector('#App')), getAge(day.value, month.value, year.value)] :
    [clearInp(day, month, year), false]
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
  })

  document.addEventListener('keydown', (e) => {
    e.code == 'Escape' && document.querySelector('#p-inpY') ?
      [removeElem([overlayEl, popupEl]), addElem(app, body.querySelector('#App'))] :
      false
  })
  overlayEl.addEventListener('click', (e) => {
    removeElem([overlayEl, popupEl])
    addElem(app, body.querySelector('#App'))
  })

  const getAge = (day, month, year) => {
   
    const now = new Date() 
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()) 
    const dob = new Date(year, month - 1, day) 
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()) 
    const age = today.getFullYear() - dob.getFullYear()
    let html = document.querySelector('.app-wrp__countdown')
    html.textContent = `Вам исполнится ${age} лет 
    до дня рождения осталось `
    if(month < new Date().getMonth()) dobnow = new Date(today.getFullYear() + 1, dob.getMonth(), dob.getDate()) 
    // console.log(new Date().getMonth() < )
    setInterval(countTimer.bind(dobnow), 1000);
  }



  function countTimer() {
    let milsTime = Math.abs(new Date() - new Date(this));
    if (milsTime <= 0) clearInterval(timerId1);
    let year = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24 / 365) : 0;
    let month = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24 / 30) : 0;
  
    let week = milsTime > 0 ? (milsTime / 1000 / 60 / 60 / 24 / 7) : 0;
    let weekend = milsTime > 0 ? (milsTime / 1000 / 60 / 60 / 24 / 7 * 2) : 0;
    let workDay = milsTime > 0 ? (milsTime / 1000 / 60 / 60 / 24 / 7 * 5) : 0;
  
    let days = milsTime > 0 ? Math.round(milsTime / 1000 / 60 / 60 / 24) : 0;
    let hours = milsTime > 0 ? Math.floor(milsTime / 1000 / 60 / 60) % 24 : 0;
    let minutes = milsTime > 0 ? Math.floor(milsTime / 1000 / 60) % 60 : 0;
    let seconds = milsTime > 0 ? Math.floor(milsTime / 1000) % 60 : 0;
  

  let html = document.querySelector('.app-wrp__countdown')
    html.textContent =
      `
   ${month} ${num_word(month, ['месяц', 'месяца', 'месяцев'])}
   ${week.toFixed(1)} ${num_word(week.toFixed(1), ['недели', 'неделя', 'недель'])}
   ${workDay.toFixed()} ${num_word(workDay.toFixed(), ['рабочих дней', 'рабочих дней', 'рабочих дней'])}
   ${weekend.toFixed()} ${num_word(weekend.toFixed(), ['выходных дней', 'выходных дней', 'выходных дней'])}
   ${days} ${num_word(days, ['день', 'дня', 'дней'])}
   ${hours} ${num_word(hours, ['час', 'часа', 'часов'])}
   ${minutes} ${num_word(minutes, ['минута', 'минуты', 'минут'])}
   ${seconds} ${num_word(seconds, ['секунда', 'секунды', 'секунд'])}
  `
  
    // console.log(month)
    // console.log(days)
    // console.log(week.toFixed(1))
    // console.log(workDay.toFixed())
    // console.log(weekend.toFixed())
    // console.log(hours.toFixed())
    // console.log(minutes.toFixed())
    // console.log(seconds.toFixed())
  }



  function num_word(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
})

