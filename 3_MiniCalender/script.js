let MainDate = new Date()
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const daynames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let month = document.querySelector('.month')
let day = document.querySelector('.day')
let date = document.querySelector('.date')
let year = document.querySelector('.year')


month.innerHTML = `${monthNames[MainDate.getMonth()]}`
day.innerHTML = `${daynames[MainDate.getDay()]}`
date.innerHTML = `<h1>${MainDate.getDate()}</h1>`
year.innerHTML = `${MainDate.getFullYear()}`

// monthNameEl.innerText = date.toLocaleString("en", {
//     month: "long",
//   });
  
//   dayNameEl.innerText = date.toLocaleString("en", {
//     weekday: "long",
//   });

