let FormEl = document.getElementById("FormEl");
let BillAmount = document.getElementById("BillAmount");
let TipAmount = document.getElementById("TipAmount");

FormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const formdata = new FormData(FormEl);
  let bill = formdata.get("BillAmount");
  let tip = formdata.get("TipAmount");

  let TotalAmount = parseFloat(bill) + ( (parseFloat(tip)* parseFloat(bill))/100  );

  document.querySelector(".TotalAmount").innerHTML = TotalAmount.toFixed(2);
  reset();
});

function reset() {
  document.getElementById("BillAmount").value = "";
  document.getElementById("TipAmount").value = "";
}

function totalamoutReset(){
    document.querySelector(".TotalAmount").innerHTML = ""
}