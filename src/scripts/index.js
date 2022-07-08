document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body')
  const checkInpDay = value => value > 0 && value < 32 ? true : false
  const checkInpMonth = value => value > 0 && value < 13 ? true : false
  const checkInpYear = value => value > 1906 && value < new Date().getFullYear() ? true : false
  const removeElem = (el)=> el.forEach(el => el.remove())
  const clearInp = (day, month, year) => {day.value =''; month.value =''; year.value =''}
  const checkInputValue = (day, month, year)=> {
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

  addElem(overlay)
  addElem(popup)
  document.querySelector('#p-inpBtn').addEventListener('click', ()=> {
    const inpDay = document.querySelector('#p-inpDay')
    const inpMon = document.querySelector('#p-inpMon')
    const inpYear = document.querySelector('#p-inpY')
    checkInputValue(inpDay, inpMon, inpYear)

  })






  // function checkInputValue(day, month, year){
  // if(checkInpDay(day.value) && checkInpMonth(month.value) && checkInpYear(year.value))  {
  //   document.querySelector('#overlay').remove()
  //   document.querySelector('.popup').remove()
  // } else {
  //   console.log(clearInp(day, month, year))
  // }

  // }

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