const calculatorEl = document.getElementById('calculator');
const screenEl = document.getElementById('screen-value');

let currentScreenValue = '';
let firstOperand = '';
let operator = '';
let secondOperand = '';
let isError = false;

function clearCurrentScreenValue() {
  currentScreenValue = '';
  screenEl.innerText = currentScreenValue;
}

function setCurrentScreenValue(value) {
  currentScreenValue = value;
  screenEl.innerText = currentScreenValue;
}

function calculateResult() {
  if (!firstOperand || !operator || !secondOperand) {
    isError = true;
    return '';
  }

  let result = '';
  const a = Number(firstOperand);
  const b = Number(secondOperand);
  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      result = '';
  }

  if (!Number.isFinite(result) || Number.isNaN(result)) {
    isError = true;
    return '';
  }

  return parseFloat(result.toFixed(10));
}

function clearAll() {
  clearCurrentScreenValue();
  firstOperand = '';
  operator = '';
  secondOperand = '';
  isError = false;
}

calculatorEl.addEventListener('click', (event) => {
  if (event.target.classList.contains('number')) {
    if (isError) {
      clearAll();
    }
    if (currentScreenValue === operator) {
      clearCurrentScreenValue();
    }
    setCurrentScreenValue(`${currentScreenValue}${event.target.innerText}`);
  }

  if (event.target.classList.contains('action')) {
    console.log(
      firstOperand,
      operator,
      secondOperand,
      isError,
      currentScreenValue
    );
    if (!firstOperand) {
      firstOperand = currentScreenValue;
    }
    if (firstOperand && operator) {
      secondOperand = currentScreenValue;
      const result = calculateResult();
      firstOperand = result;
    }
    operator = event.target.innerText;

    clearCurrentScreenValue();
    setCurrentScreenValue(operator);
  }

  if (event.target.classList.contains('equal')) {
    secondOperand = currentScreenValue;
    const result = calculateResult();
    if (isError) {
      setCurrentScreenValue('ERROR');
    } else {
      setCurrentScreenValue(result);
      firstOperand = result;
    }
  }

  if (event.target.classList.contains('clear')) {
    clearAll();
  }
});
