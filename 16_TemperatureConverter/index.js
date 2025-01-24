let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");

Celsius.addEventListener('keyup',(e)=>{
    let c = e.target.value;
    c = Number.parseFloat(c)
    CelsiusToFahrenheitAndKelvin(c)
})


function CelsiusToFahrenheitAndKelvin(c) {
    Fahrenheit.value = ((9 / 5) * c + 32).toFixed(2);
    Kelvin.value = (c + 273.15).toFixed(2);
    if (c == "") {
      Fahrenheit.value = "";
      Kelvin.value = "";
    }
}

Fahrenheit.addEventListener('keyup',(e)=>{
    let f = e.target.value;
    f = Number.parseFloat(f)
    FahrenheitToCelsiusAndKelvin(f)
})

function FahrenheitToCelsiusAndKelvin(f) {
        Celsius.value = ((f-32)*(5/9)).toFixed(2);
        Kelvin.value = ((f-32)*(5/9) + 273.15).toFixed(2)
        if (f == "") {
          Celsius.value = "";
          Kelvin.value = "";
        }
}

Kelvin.addEventListener('keyup',(e)=>{
    let k = e.target.value;
    k = Number.parseFloat(k)
    KelvinToCelsiusAndFahrenheit(k)
})

function KelvinToCelsiusAndFahrenheit(k) {
        Celsius.value =  (k - 273.15).toFixed(2)
        Fahrenheit.value = (((9/5)*(k-273.15)) + 32).toFixed(2);
        if (k == "") {
          Celsius.value = "";
          Fahrenheit.value = "";
        }

}
