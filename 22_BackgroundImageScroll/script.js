let image = document.querySelector(".image");
window.addEventListener("scroll", () => {
  image.style.opacity = `${1 - window.scrollY / 800}`;

});
