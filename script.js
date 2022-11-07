//1
function getCentury(year) {
  if (year % 100 === 0) {
    year++;
  }

  const century = Math.ceil(year / 100).toString();
  let ending = 'th';

  if (century.charAt(1) === '1') {
    ending = 'st';
  }
  if (century.charAt(1) === '2') {
    ending = 'nd';
  }
  if (century.charAt(1) === '3') {
    ending = 'rd';
  }

  return `${century}${ending}`;
}

//2
function stringToNumbers(input) {
  const vowels = 'aeioyu';

  const transformCharToNumber = (char) => {
    if (vowels.includes(char)) {
      return '1';
    }
    return '0';
  };

  return input.split('').map(transformCharToNumber).join('');
}

//3
function spinWords(input) {
  const reverseWord = (word) => {
    if (word.length > 5) {
      return word.split('').reverse().join('');
    }
    return word;
  };

  return input.trim().split(' ').map(reverseWord).join(' ');
}

// 4
function highAndLow(str) {
  const arr = str.split(' ');

  const min = arr.reduce((prev, current) => {
    return Math.min(prev, current);
  });

  const max = arr.reduce((prev, current) => {
    return Math.max(prev, current);
  });

  return `${min} ${max}`;
}

// 5
function createPhoneNumber(arr) {
  return arr.reduce((acc, currentValue, index) => {
    if (index === 3) {
      return `${acc}) ${currentValue}`;
    }
    if (index === 6) {
      return `${acc}-${currentValue}`;
    }
    return `${acc}${currentValue}`;
  }, '(');
}

const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');

button1.addEventListener('click', () => {
  const input1 = document.getElementById('input-1');

  console.log(getCentury(input1.value));
});

button2.addEventListener('click', () => {
  const input2 = document.getElementById('input-2');

  console.log(stringToNumbers(input2.value));
});

button3.addEventListener('click', () => {
  const input3 = document.getElementById('input-3');

  console.log(spinWords(input3.value));
});

button4.addEventListener('click', () => {
  const input4 = document.getElementById('input-4');

  console.log(highAndLow(input4.value));
});

button5.addEventListener('click', () => {
  const input5 = document.getElementById('input-5');

  console.log(createPhoneNumber(input5.value));
});
