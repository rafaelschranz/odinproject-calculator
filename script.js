document.addEventListener("DOMContentLoaded", function () {
  // Variable to store the value
  let numberValue = "";
  let operatorValue = "";
  let displayValue = "";

  // Get all number buttons
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");

  // Add event listeners to each number button
  numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
      numberValue += button.value;
      displayValue += button.value;
      console.log("Number value:", numberValue);
      document.getElementById("display-text").textContent = displayValue;
    });
  });

  // Add event listeners to each operator button
  operatorButtons.forEach((button) => {
    button.addEventListener("click", function () {
      operatorValue = button.value;
      displayValue += ` ${operatorValue} `;
      console.log("Operator value:", operatorValue);
      document.getElementById("display-text").textContent = displayValue;
      numberValue = ""; // Reset number value for next input
    });
  });

  const clearButton = document.querySelector(".operator.ac");
  clearButton.addEventListener("click", function () {
    displayValue = "";
    numberValue = "";
    operatorValue = "";
    document.getElementById("display-text").textContent = "0";
  });
});
