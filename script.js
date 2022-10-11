function Person(name, age, gender, nationality, country, travelCountry) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.nationality = nationality;
  this.country = country;
  this.travelCountry = travelCountry;
}
const personOne = new Person("Bohdan", 23, "male", "ukrainian", "Ukraine", [
  "Greece",
  "Great Britain",
  "USA",
]);
const personTwo = new Person("Serhiy", 26, "male", "american", "USA", [
  "Brazil",
  "Bosnia",
  "Serbia",
]);
const personThree = new Person("Vlad", 21, "male", "british", "Great Britain", [
  "Ukraine",
  "South Korea",
  "Canada",
]);
const personFour = new Person("Olexander", 28, "male", "austrian", "Austria", [
  "Germany",
  "Netherlands",
  "France",
]);
console.log(personOne);


function acquaintance() {
  console.log(`Hello, dear ${this.name}!`);
}
function wakeUp() {
  console.log(`Wake up ${this.name}! Congratulations! You are not russian. You are ${this.nationality}.`);
}
function fallAsleep() {
  console.log(`${this.name}! It's time to fall asleep! It's already night time in ${this.country}!`);
}
function travelCountry() {
  console.log(
    `Dear ${this.name} this month you should visit these countries: ${this.travelCountry}`
  );
}

acquaintance.call(personTwo);
wakeUp.call(personOne);
fallAsleep.call(personThree);
travelCountry.call(personFour);

//

const newPerson = {
  name: 'Tania'
}
function info(phone, email) {
  console.log(`Name: ${this.name}, phone: ${phone}, email: ${email}`)
}
function bind(fn, context, ...rest) {
  return function (...args) {
    const uniqId = Date.now().toString() + Math.random
    context[uniqId] = fn
    const result = context[uniqId](...rest.concat(args))
    delete context[uniqId]
    return result
  }
}  
bind(info, newPerson, '+380635281511', 'v.sugar25@gmail.com')()
console.log(newPerson)

//

function isEqual(object1, object2) {
  const info1 = Object.getOwnPropertyNames(obj1);
  const info2 = Object.getOwnPropertyNames(obj2);
  if (info1.length !== info2.length) {
    return false;
  }
  for (let i = 0; i < info1.length; i += 1) {
    const info = info1[i];
    if (obj1[info] !== obj2[info]) {
      return false;
    }
  }
  return true;
}

const obj1 = {
  name: "Tania",
  surname: "Pavliuk"
};
const obj2 = {
  surname: "Pavliuk",
  name: "Tania"
};
console.log(isEqual(obj1, obj2));

//


// function NOD(A) {   
//     var n = A.length, x = Math.abs(A[0]);
//     for (var i = 1; i < n; i++)
//      { var y = Math.abs(A[ i ]);
//        while (x && y){ x > y ? x %= y : y %= x; }
//        x += y;
//      }
//     return x;
// }

// function NOK(A) `{   
//     var  n = A.length, a = Math.abs(A[0]);
//     for (var i = 1; i < n; i++)
//      { var b = Math.abs(A[ i ]), c = a;
//        while (a && b){ a > b ? a %= b : b %= a; } 
//        a = Math.abs(c*A[ i ])/(a+b);
//      }
//     return a;
// }
  
//

function gcd(x, y) {
	if (!y) {
		return x;
	}
	return gcd(y, x % y);
}

function lcm(x, y) {
	return x * y / gcd(x, y);
}

function Calculator() {
	this.enterData = function () {
		this.a = parseInt(prompt('Enter a'));
		this.b = parseInt(prompt('Enter b'));
	}

	this.calculateSum = function () {
		return this.a + this.b;
	}

	this.calculateNSD = function () {
		return gcd(this.a, this.b);
	}

	this.calculateNSK = function () {
		return lcm(this.a, this.b);
	}
}

const calc = new Calculator();
calc.enterData();
console.log("Sum: " + calc.calculateSum());
console.log("NSD: " + calc.calculateNSD());
console.log("NSK: " + calc.calculateNSK());