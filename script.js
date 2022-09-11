alert('Hello User!');
let userName = prompt('What is your name?');
let userSurname = prompt('What is your surname?');
let userNumber = prompt('What is your favourite number?');
console.log(`Nice to meet you, ${userName} ${userSurname}! Your favourite number is ${userNumber}!`);
let firstNumber = +prompt('Input the first number');
let secondNumber = +prompt('Input the second number');
let sum = firstNumber + secondNumber;
let diff = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;
console.log(
`Calculations are finished!
Sum: ${firstNumber} + ${secondNumber} = ${sum}
Diff: ${firstNumber} - ${secondNumber} = ${diff}
Mult: ${firstNumber} * ${secondNumber} = ${mult}
Div: ${firstNumber} / ${secondNumber} = ${div}`);
const currentYear = (new Date()).getFullYear();
let userYearOfBirth = prompt('What is your year of birth?');
console.log(`Your age is ${currentYear - userYearOfBirth}`);
const a = +prompt('Input the "a" number');
const b = +prompt('Input the "b" number');
const result = a % b;
console.log(`Remainder of a number: ${result}`);
const pairingNumber = +prompt('Enter a number to determine pairing');
const pairOrNo = pairingNumber % 2 ? false : true;
console.log(`The number you specified is paired - ${pairOrNo}`);


