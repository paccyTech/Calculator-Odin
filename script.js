let currentInput = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('display').value = currentInput;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error: Division by 0';
  }
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error: Invalid operator';
  }
}

function calculate() {
  if (currentInput.includes('+') || currentInput.includes('-') || currentInput.includes('*') || currentInput.includes('/')) {
    const parts = currentInput.split(/[+\-*/]/);
    firstNumber = parseFloat(parts[0]);
    operator = currentInput.charAt(parts[0].length);
    secondNumber = parseFloat(parts[1]);

    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = operate(operator, firstNumber, secondNumber);
      document.getElementById('display').value = result.toFixed(2);
      currentInput = result.toString();
    }
  }
}
