let hour = document.querySelector('.Hour')
let minuetes = document.querySelector('.Minutes')
let seconds = document.querySelector('.Seconds')
let AMPM = document.querySelector('.AMPM')

function UpdateClock() {

    let date = new Date()
    hour.innerHTML = date.getHours()
    minuetes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
    if (date.getHours() > 12) {
        AMPM.innerHTML = "PM"
    } else {
        AMPM.innerHTML = "AM"
    }

}


setInterval(() => {
    UpdateClock()
}, 1);