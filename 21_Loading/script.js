let percentage = document.querySelector(".percentage");
let line = document.querySelector(".line");
let index = 0;
let style = document.createElement("style");

let IndexChangeInterval = setInterval(() => {
  percentage.innerHTML = `${index}%`;
  style.textContent = `.line::before{
    content: '';
    background-color: red;
    width: ${index}%;
    height: 100%;
    position: absolute;
    top: 0px;
}`;
  index++;
  if (index > 100) {
    clearInterval(IndexChangeInterval);
  }
}, 20);

document.head.appendChild(style)