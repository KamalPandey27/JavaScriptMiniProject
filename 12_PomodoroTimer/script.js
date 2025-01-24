let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let time = document.getElementById("Timer");
let timeleft = 1500;
let interval;

function updatetime() {
  let minutes = Math.floor(timeleft / 60);
  let second = timeleft % 60;
  time.innerHTML = `${minutes.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`;
}

function starttimer(){
    interval = setInterval(() => {
        timeleft--;
        updatetime();
        if (timeleft === 0) {
          clearInterval(interval);
          alert("Times up !");
          timeleft = 1500;
          updatetime();
        }
      }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timeleft = 1500;
    updatetime();
}

start.addEventListener("click",starttimer);
stop.addEventListener("click",stopTimer);
reset.addEventListener("click",resetTimer);
