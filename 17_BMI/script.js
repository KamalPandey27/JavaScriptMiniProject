let form = document.getElementById("formEL");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formdata = new FormData(form);
  let height = formdata.get("height");
  let weight = formdata.get("weight");

  let result = calculteBMI(height, weight);
  document.getElementById("bmidata").innerText = result.toFixed(2);

  form.reset();
});

function calculteBMI(height, weight) {
  return weight / Math.pow(height / 100, 2);
}

function reset() {
  document.getElementById("weight").value = ''
  document.getElementById("height").value = ''
}
