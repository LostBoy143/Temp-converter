let celciusInput = document.getElementById(
  "celcius-input"
);
let fahInput = document.getElementById(
  "fahrenheit-input"
);

let kelInput = document.getElementById(
  "kelvin-input"
);
let btn = document.querySelector("#btn");

function convert() {
  if (btn.innerHTML == "Convert") {
    btn.innerHTML = "Reset";
    if (
      celciusInput.value != null &&
      celciusInput.value != 0
    ) {
      fahInput.value =
        (Number(celciusInput.value) * 9) / 5 + 32;
      kelInput.value =
        Number(celciusInput.value) + 273.15;
    } else if (
      fahInput.value != null &&
      fahInput.value != 0
    ) {
      celciusInput.value =
        ((Number(fahInput.value) - 32) * 5) / 9;
      kelInput.value =
        ((Number(fahInput.value) - 32) * 5) / 9 +
        273.15;
    } else if (
      kelInput.value != null &&
      kelInput.value != 0
    ) {
      celciusInput.value =
        Number(kelInput.value) - 273.15;
      fahInput.value =
        ((Number(kelInput.value) - 273.15) * 9) /
          5 +
        32;
    } else {
      alert("Please  enter a value");
      btn.innerHTML = "Convert";
    }
  } else {
    celciusInput.value = "";
    fahInput.value = "";
    kelInput.value = "";
    btn.innerHTML = "Convert";
  }
}
