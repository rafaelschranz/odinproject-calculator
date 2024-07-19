document.addEventListener("DOMContentLoaded", function () {
  // Variable to store the value
  let numberValue = "";

  // Get all number buttons
  const numberButtons = document.querySelectorAll(".number");

  // Add event listeners to each number button
  numberButtons.forEach((button) => {
    button.addEventListener("click", function () {
      numberValue = button.value;
      console.log("Number value:", numberValue);
      // Optionally, update the display text with the selected number
      document.getElementById("display-text").textContent = numberValue;
    });
  });
});
