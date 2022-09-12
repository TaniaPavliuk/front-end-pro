const roundingResult = 0.1 + 0.2
console.log(roundingResult.toFixed(1));

const userLogin = prompt('Enter your login');
const userPassword = prompt('Enter your password');
const login = 'admin';
const password = '12pass33210';
if (userLogin !== login && userPassword !== password) {
    console.log('Wrong login and password!');
} else if (userLogin !== login) {
    console.log('Wrong login!');
} else if (userPassword !== password) {
    console.log('Wrong password!');
} else {
    console.log('Welcome!');
}

const amountOfMoney = +prompt('How much money do you have?');
console.log('Price-list: watermalon: 21 uah; carrots: 8 uah; potatoes: 12 uah.');
const watermalon = 21;
const carrots = 8;
const potatoes = 12;
if (amountOfMoney >= Math.min(watermalon, carrots, potatoes)) {
    const choice = prompt('What would you like to buy?');
    let productsAmount;
    let moneyRemainde;
    switch (choice) {
        case 'watermalon':
            productsAmount = amountOfMoney / watermalon;
            moneyRemainde = amountOfMoney % watermalon;
            break;
        case 'carrots':
            productsAmount = amountOfMoney / carrots;
            moneyRemainde = amountOfMoney % carrots;
            break;
        case 'potatoes':
            productsAmount = amountOfMoney / potatoes;
            moneyRemainde = amountOfMoney % potatoes;
            break;
        default:
            console.log('Wrong action!');
    }

    if (productsAmount >= 1) {
        console.log(`Amount: ${Math.floor(productsAmount)} ${choice} Remainder: ${moneyRemainde} uah`);
    } else {
        console.log(`Unfortunately you don't have enough money to buy at least one item of ${choice}!`);
    }
} else {
    console.log('Unfortunately you don`t have enough money to buy at least one item!');
}

const firstSideT = +prompt('Enter the first side of triangle');
const secondSideT = +prompt('Enter the second side of triangle');
const thirdSideT = +prompt('Enter the third side of triangle');
if (firstSideT + secondSideT > thirdSideT && secondSideT + thirdSideT > firstSideT && thirdSideT + firstSideT > secondSideT) {
    console.log('This triangle is valid!');
} else {
    console.log('This triangle is not valid!');
}

//2 && 0 && 3 || true && false - false; 
//false || " " || 3 && true - " ";
//1 && 1000 && '0' || 0 && 'Bob' - '0';
//-1 || 0 || 0 && "" || 1010 - -1;
