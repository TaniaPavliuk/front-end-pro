//1
const createTeam = (teamName, driverName, birthYear, car, sponsor, isAvailableDriver) => {
    const team = {
        teamName,
        driverName,
        birthYear,
        car,
        sponsor,
        isAvailableDriver
    };
    return team
}
const myFirstTeam = createTeam('Rolling Stones', 'Ken Block', '1984', 'Ford', 'Red Bull', true)
//console.log(myFirstTeam)

//2
const createNewUser = () => {
    const userNew = {
      login: "",
      password: "",
      city: "",
      country: "",
      gender: "",
      age: "",
    };
  
    for (const [key] of Object.entries(userNew)) {
      let result = prompt([key]);
      if (result === null || result === "") {
        userNew[key] = EMPTY_VALUE;
      } else {
        userNew[key] = result;
      }
    }
    return userNew;
  };
  const newUser = createNewUser();

const userLogin = prompt('Enter your login.');
const userPassword = prompt('Enter your password.');
const userCity = prompt('Enter your city.');
const userCountry = prompt('Enter your country.');
const userGender = prompt('Enter your gender.');
const userAge = prompt('Enter your age.');
const userData = {
    userLogin,
    userPassword,
    userCity,
    userCountry,
    userGender,
    userAge
};

const user2Login = prompt('Enter your login.');
const user2Password = prompt('Enter your password.');
const user2City = prompt('Enter your city.');
const user2Country = prompt('Enter your country.');
const user2Gender = prompt('Enter your gender.');
const user2Age = prompt('Enter your age.');
const userData2 = {
    userLogin: user2Login,
    userPassword: user2Password,
    userCity: user2City,
    userCountry: user2Country,
    userGender: user2Gender,
    userAge: user2Age
};

//3
const changeUserData = (user, key, value) => {
    user[key] = value
}

changeUserData(userData, 'userCity', 'Kherson')
console.log(userData)
changeUserData(userData2, 'userAge', '12')
console.log(userData2)

//4
const student = {
    studentName: 'Steve',
    studentSurname: 'Sad',
    studentAge: 18,
    studentCourse: 3,
    studentCity: 'Washington',
    addHomework: () => {
        console.log('Sending my howework... Please, wait');
    },
    greeting: () => {
        console.log('Hi everyone!');
    }
}
student.greeting();
student.addHomework();

//5
const isEmpty = (obj) => {
    const keys = Object.keys(obj);
    if (keys.length === 0) {
        return true
    } else {
        return false
    }
}

//6
const teamProceeds = {
    Taras: 2000,
    Marta: 10,
    Ivan: 1200,
    Petro: 400,
    Roma: 366,
    Alina: 829
}

//7
const calculateSum = (obj) => {
    const proceedsArray = Object.values(obj);
    const callback = (proceed, sum) => {
        const currentSum = proceed + sum;
        return currentSum;
    }
    const result = proceedsArray.reduce(callback, 0);
    return result;
}
console.log(calculateSum(teamProceeds));

//8
const calculateMin = (obj) => {
    const proceedsArray = Object.entries(obj);
    const callback = (proceed, min) => {
        if (proceed[1] < min[1]) {
            return proceed
        } else {
            return min
        }   
    }
    const result = proceedsArray.reduce(callback, proceedsArray[0]);
    return result[0];
}
console.log(calculateMin(teamProceeds));

//9
const calculateMax = (obj) => {
    const proceedsArray = Object.entries(obj);
    const callback = (proceed, max) => {
        if (proceed[1] > max[1]) {
            return proceed
        } else {
            return max
        }   
    }
    const result = proceedsArray.reduce(callback, proceedsArray[0]);
    return result[0];
}
console.log(calculateMax(teamProceeds));

//10
const calculateRandom = (obj) => {
    const teamProceedsArray = Object.entries(obj);
    const randomIndex = Math.floor(Math.random() * teamProceedsArray.length);
    return teamProceedsArray[randomIndex][0]
}
console.log(`The employee of the month is ${calculateRandom(teamProceeds)}`);