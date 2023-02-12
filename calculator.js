const display = document.getElementById("display");
const buttons = document.querySelectorAll("input[type='button']");

let firstOperand = "";
let secondOperand = "";
let operator = "";

for (const button of buttons) {
  button.addEventListener("click", function () {
    const value = this.value;

    if (isNaN(value)) {
      if (value === "C") {
        firstOperand = "";
        secondOperand = "";
        operator = "";
        display.value = "";
      } else if (value === "=") {
        secondOperand = display.value;

        if (operator === "+") {
          display.value = parseFloat(firstOperand) + parseFloat(secondOperand);
        } else if (operator === "-") {
          display.value = parseFloat(firstOperand) - parseFloat(secondOperand);
        } else if (operator === "*") {
          display.value = parseFloat(firstOperand) * parseFloat(secondOperand);
        } else if (operator === "/") {
          display.value = parseFloat(firstOperand) / parseFloat(secondOperand);
        }

        firstOperand = display.value;
        secondOperand = "";
        operator = "";
      } else {
        firstOperand = display.value;
        operator = value;
        display.value = "";
      }
    } else {
      display.value += value;
    }
  });
}