/*
 *  There are many ways to code a calculator. This is one way that works.
 *  If your approach is different, but works, that is also a correct way :).
 *  Some choices here are made for readability - like using if statements instead of a switch block.
 *  Also if our `if` statements have a `return`, then we don't need to use else if's. Since `return` exits
 *  the function (stops reading the rest of it).
 *
 *  You may do some testing and find bugs, especially with multi-number operations.
 */

let firstNumber, secondNumber, operation;

const doMath = () => {
  // grab the second number:
  secondNumber = Number($(".display").text());

  if (operation === "+") {
    // sum the numbers:
    return firstNumber + secondNumber;
  }

  if (operation === "-") {
    // sum the numbers:
    return firstNumber - secondNumber;
  }

  if (operation === "*") {
    // sum the numbers:
    return firstNumber * secondNumber;
  }

  if (operation === "/") {
    // sum the numbers:
    return firstNumber / secondNumber;
  }
};

$(() => {
  const handleButtonClick = event => {
    const buttonValue = $(event.target).text();
    const displayValue = $(".display").text();

    // Find out if button is button-container or operations-container
    // (Number or operator)
    const buttonType = $(event.target)
      .parent()
      .attr("class");

    if (buttonType === "button-container") {
      $(".display").text(`${displayValue}${buttonValue}`);
    } else {
      // if an operations button is clicked:
      // detect which operation:

      // one way to do it:
      // if ($(event.target).attr("id") === "add") {

      // another way:
      if (
        buttonValue === "+" ||
        buttonValue === "-" ||
        buttonValue === "*" ||
        buttonValue === "/"
      ) {
        // set operation variable to +, -, *, or /:
        operation = buttonValue;

        // Check if a firstNumber already exists:
        // ternary:
        // firstNumber ? alert("Number already defined") : firstNumber = displayValue;
        if (firstNumber) {
          // If there is already a firstNumber in the register, grab the second number and do math.
          // Run the numbers and update display, doMath() returns the answer:
          $(".display").text(doMath());
        } else {
          // This is the first number, store it and blank the display:
          firstNumber = Number(displayValue);
          $(".display").text("");
        }
      } else if (buttonValue === "=") {
        // add, subtract, divide, or multiply and return answer.
        // Run the numbers and update display, doMath() returns the answer:
        $(".display").text(doMath());
      }
    }
  };

  $(".button").on("click", handleButtonClick);
});
