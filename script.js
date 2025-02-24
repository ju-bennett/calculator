const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return 'Error'; // Handle division by zero
  }
  return a / b;
};

const operate = (operator, num1, num2) => {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        return 'Invalid Operator';
    }
  };
  
let currentNumber = '';
let previousNumber = '';
let operator = '';

const appendNumber = (num) => {
    currentNumber += num;
    updateDisplay(currentNumber);
  };
  
  const updateDisplay = (value) => {
    document.getElementById('display').value = value;
  };
  
  const setOperator = (op) => {
    if (previousNumber && currentNumber) {
      currentNumber = operate(operator, parseFloat(previousNumber), parseFloat(currentNumber)).toString();
      updateDisplay(currentNumber);
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
  };
  
  const calculate = () => {
    if (previousNumber && currentNumber && operator) {
      const result = operate(operator, parseFloat(previousNumber), parseFloat(currentNumber));
      updateDisplay(result);
      currentNumber = result.toString();
      previousNumber = '';
      operator = '';
    }
  };
  
  const clearDisplay = () => {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay('0');
  };
  
  const appendDecimal = () => {
    if (!currentNumber.includes('.')) {
      currentNumber += '.';
      updateDisplay(currentNumber);
    }
  };
  
  const backspace = () => {
    currentNumber = currentNumber.slice(0, -1);
    updateDisplay(currentNumber);
  };
  
  document.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      appendNumber(e.key);
    } else if (e.key === '+') {
      setOperator('+');
    } else if (e.key === '-') {
      setOperator('-');
    } else if (e.key === '*') {
      setOperator('*');
    } else if (e.key === '/') {
      setOperator('/');
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      backspace();
    } else if (e.key === 'c') {
      clearDisplay();
    }
  });
  