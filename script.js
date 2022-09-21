const minNumber = (firstNumber, secondNumber, thirdNumber, fourthNumber) => {
    if (typeof (firstNumber && secondNumber && thirdNumber && fourthNumber) === "string") {
      firstNumber = Number(firstNumber);
      secondNumber = Number(secondNumber);
      thirdNumber = Number(thirdNumber);
      fourthNumber = Number(fourthNumber);
    }
    if (typeof (firstNumber && secondNumber && thirdNumber && fourthNumber) === "number") {
      // console.log(Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber));
      return Math.min(firstNumber, secondNumber, thirdNumber, fourthNumber);
    } else {
      // console.log("Wrong number!");
      return "Something went wrong! There is no minimum number!";
    }
  };
  minNumber("6", 8, null, "-1");
  
  const greatestCommonDivider = (x, y) => {
    if (typeof (x && y) === "string") {
      x = Number(x);
      y = Number(y);
    }
    if (typeof x !== "number" || typeof y !== "number") {
      // console.log("Wrong action!");
      return "Something went wrong!";
    } else {
      x = Math.abs(x);
      y = Math.abs(y);
      while (y) {
        let t = y;
        y = x % y;
        x = t;
      }
      // console.log(x);
      return x;
    }
  };
  
  greatestCommonDivider("8", "22");
  
  const isPerfect = (number1) => {
    if (typeof num1 === "string") {
      number1 = Number(num1);
    }
    if (typeof number1 === "number") {
      let temperature = 0;
      for (let i = 1; i <= number1 / 2; i++) {
        if (number1 % i === 0) {
            temperature += i;
        }
      }
      if (temperature === number1 && temperature !== 0) {
        // console.log(true);
        return true;
      } else {
        // console.log(false);
        return false;
      }
    } else {
      // console.log("Error");
      return "Unknown error. Please try again later!";
    }
  };
  isPerfect("28");
  
  const sumTo = (numberOne, numberTwo) => {
    if (typeof (numberOne && numberTwo) === "string") {
      numberOne = Number(numberOne);
      numberTwo = Number(numberTwo);
    }
    if (typeof (numberOne && numberTwo) === "number") {
      let sum = 0;
      for (let i = numberOne; i <= numberTwo; i++) {
        sum += i;
      }
      // console.log(sum);
      return sum;
    } else {
      // console.log("Error");
      return "Unknown error. Please try again later!";
    }
  };
  sumTo("1", "3");
  
  const convertCtoF = (celsius) => {
    if (typeof celsius === "string") {
      celsius = Number(celsius);
    }
    if (typeof celsius === "number") {
      // console.log(celsius * (9 / 5) + 32);
      return celsius * (9 / 5) + 32;
    } else {
      return "Unknown error. Please try again later!";
    }
  };
  convertCtoF("22");
  
  const getRandomNumber = (min, max) => {
    min = 0;
    max = 40;
    if (typeof (min && max) === "number") {
      min = Math.ceil(min);
      max = Math.floor(max);
      // console.log(Math.floor(Math.random() * (max - min + 1)) + min);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    } else {
      // console.log("error");
      return "Unknown error. Please try again later!";
    }
  };

  getRandomNumber();