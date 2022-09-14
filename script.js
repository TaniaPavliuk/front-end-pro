for (let i = 10; i <= 25; i = i + 0.5) {
    console.log(i)
}

const userInput = prompt('Input the number');
const userNumber = Number(userInput);
let isPrime = true;
for (let i = 2; i < userNumber; i++) {
    if (userNumber % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime === true) {
    console.log('It`s a prime number!');
} else {
    console.log('It`s not a prime number!');
}

const userCheck = Number(prompt('Please enter the amount of purchase'));
let discount = 0;
if (userCheck < 100) {
    discount = 3;
} else if (userCheck < 200) {
    discount = 5;
} else {
    discount = 7;
}
console.log(`Your discount is ${userCheck / 100 * discount}uah`);

for (let i = 2; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
        console.log(`${j} * ${i} = `, j * i);
    }
}

const rate = 36.76;
for (let i = 10; i <= 100; i = i + 10) {
    const currency = i * rate;
    console.log(`${i} USD = ${currency.toFixed(2)} UAH`);
}

const numbers = prompt('Please enter fifteen numbers devided by space!');
const arrayNumbers = numbers.split(' ');
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;
let evenNumbers = 0;
let oddNumbers = 0;
for (let i = 0; i < arrayNumbers.length; i++) {
    const currentElement = Number(arrayNumbers[i]);
    if (currentElement > 0) {
        positiveNumbers++
    }
    if (currentElement < 0) {
        negativeNumbers++
    }
    if (currentElement === 0) {
        zeroNumbers++
    }
    if (currentElement % 2 === 0) {
        evenNumbers++
    }
    if (currentElement % 2 !== 0) {
        oddNumbers++
    }
}
console.log(`There are ${positiveNumbers} positive numbers`);
console.log(`There are ${negativeNumbers} negative numbers`);
console.log(`There are ${zeroNumbers} zero numbers`);
console.log(`There are ${evenNumbers} even numbers`);
console.log(`There are ${oddNumbers} odd numbers`);



