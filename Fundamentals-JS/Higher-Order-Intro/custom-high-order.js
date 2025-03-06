function add(num1, num2) {
    return num1 + num2;
  }
  function subtract(num1, num2) {
    return num1 - num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function divide(num1, num2) {
    return num1 / num2;
  }

// returns a function
function calculator(num1, num2, operator) {
    if (operator === "add") {
        return add(num1, num2)
    }   else if (operator === "subtract") {
            return subtract(num1, num2);
        } else if (operator === "multiply") {
            return multiply(num1, num2);
        } else if (operator === "divide") {
            return divide(num1, num2);
        } else {
        return 'Something went wrong'
    }
}

function calculator2(num1, num2, operatorCallbackFunction) {
  const result = operatorCallbackFunction(num1, num2)
  return result
}

console.log(calculator(1, 1, "add"))
console.log(calculator2(1, 2, add))