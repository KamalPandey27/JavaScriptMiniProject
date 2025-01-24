let crash = new Audio("Sounds/crash.mp3");
let kick = new Audio("Sounds/kick.mp3");
let snare = new Audio("Sounds/snare.mp3");
let tom = new Audio("Sounds/tom.mp3");

let crashEl = document.querySelector(".box1");
let kickEl = document.querySelector(".box2");
let snareEl = document.querySelector(".box3");
let tomEl = document.querySelector(".box4");

window.addEventListener("keydown", (e) => {
  if (e.key == "c") {
    crash.play();
  } else if (e.key == "k") {
    kick.play();
  } else if (e.key == "s") {
    snare.play();
  } else if (e.key == "t") {
    tom.play();
  }
});


crashEl.addEventListener('click',()=>{
    crash.play()
})
kickEl.addEventListener('click',()=>{
    kick.play()
})
snareEl.addEventListener('click',()=>{
    snare.play()
})
tomEl.addEventListener('click',()=>{
    tom.play()
})



// Other logic


// const kits = ["crash", "kick", "snare", "tom"];

// const containerEl = document.querySelector(".container");

// kits.forEach((kit) => {
//   const btnEl = document.createElement("button");
//   btnEl.classList.add("btn");
//   btnEl.innerText = kit;
//   btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
//   containerEl.appendChild(btnEl);
//   const audioEl = document.createElement("audio");
//   audioEl.src = "sounds/" + kit + ".mp3";
//   containerEl.appendChild(audioEl);
//   btnEl.addEventListener("click", () => {
//     audioEl.play();
//   });
//   window.addEventListener("keydown", (event) => {
//     if (event.key === kit.slice(0, 1)) {
//       audioEl.play();
//       btnEl.style.transform = "scale(.9)";
//       setTimeout(() => {
//         btnEl.style.transform = "scale(1)";
//       }, 100);
//     }
//   });
// });