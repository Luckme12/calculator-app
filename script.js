const display = document.getElementById("display");

function press(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function toggleSign() {
  if (display.value.startsWith("-")) {
    display.value = display.value.substring(1);
  } else if (display.value !== "") {
    display.value = "-" + display.value;
  }
}

function calculate() {
  try {
    const expression = display.value
      .replace(/÷/g, "/")
      .replace(/×/g, "*");

    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
