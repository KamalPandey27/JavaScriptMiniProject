let input = document.getElementById("input");
let submit = document.getElementById("submit");
let div = document.getElementById("age");

submit.addEventListener("click", () => {
    if(input.value==0){
        alert("Enter your age")
    }
    else{
        let age = CalculateAge();
        div.innerText = `Your age is ${age} ${age >1? "years" : "year"} old`;
    }
});

function CalculateAge() {
  let inputAge = new Date(input.value);
  let CurrentDate = new Date();
  let year = CurrentDate.getFullYear() - inputAge.getFullYear();
  let month = CurrentDate.getMonth() - inputAge.getMonth();
  if (month < 0 || (month === 0 && CurrentDate.getDate()<inputAge.getDate())) {
    year--;
  }
  return year;

}
