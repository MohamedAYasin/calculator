// Good Luck! You got this 💪🏾
// Making a simple calculator using addition, subtraction, multiplication and division only.


function calculate(num1, num2, operator) {
    if (operator === "+") {
      return num1 + num2;
    } else if (operator === "-") {
      return num1 - num2;
    } else if (operator === "*") {
      return num1 * num2;
    } else if (operator === "/") {
      if (num2 === 0) {
        return "Cannot divide by zero";
      } else {
        return num1 / num2;
      }
    } else {
      return "Invalid operator";
    }
  }

  // Example usage:
  console.log(calculate(5, 5, "+")); // Output: 10
  console.log(calculate(5, 5, "-")); // Output: 0
  console.log(calculate(5, 5, "*")); // Output: 25
  console.log(calculate(5, 5, "/")); // Output: 1
  console.log(calculate(5, 0, "/")); // Output: "Cannot divide by zero"
  console.log(calculate(5, 5, "%")); // Output: "Invalid operator"
