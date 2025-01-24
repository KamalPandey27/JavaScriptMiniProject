setInterval(() => {
    
  let time = new Date();

  let s = time.getSeconds();
  let m = time.getMinutes();
  let h = time.getHours();

  let hrotate = (30 * h + m / 2);
  let mrotate = 6 * m;
  let srotate = 6 * s;

  document.querySelector(".hour").style.transform = `rotate(${hrotate}deg)`;
  document.querySelector(".minute").style.transform = `rotate(${mrotate}deg)`;
  document.querySelector(".second").style.transform = `rotate(${srotate}deg)`;
  console.log(hrotate,mrotate,srotate)
}, 100);
