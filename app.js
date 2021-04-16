// Массивы символов из которых состоит пароль:
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const capitals = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];
const symbols = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
const emptyArr = [];

// Переменные содержащие информацию о параметрах пароля:
const passwordProps = [numbers, letters, capitals, symbols, 12];
const propCheck = document.querySelectorAll('.prop-check');
passwordProps[4] = document.querySelector('.prop-number').value;


// Переменные для проверки сгенерированного пароля:
let findNumbers = true;
let findLetters = true;
let findCapitals = true;
let findSymbols = true;

// Окно отображения готового пароля:
let showPassword = document.querySelector('.show-password');
const button = document.querySelector('.button');

// Получение информации по параметрам пароля:
if (propCheck[0].checked === true) {
  passwordProps[0] = numbers;
} else {
  passwordProps[0] = emptyArr;
}

if (propCheck[1].checked === true) {
  passwordProps[1] = letters;
} else {
  passwordProps[1] = emptyArr;
}

if (propCheck[2].checked === true) {
  passwordProps[2] = capitals;
} else {
  passwordProps[2] = emptyArr;
}

if (propCheck[3].checked === true) {
  passwordProps[3] = symbols;
} else {
  passwordProps[3] = emptyArr;
}

// Генерируем пароль с установленными параметрами:
function getPassword([arr1, arr2, arr3, arr4, passwordLength]) {
  // Объединяем и перемешиваем в один массив все досутпые символы:
  let mixedArr = arr1.concat(arr2, arr3, arr4).sort(function () {
    return Math.random() - 0.5;
  });
  // Обрезаем до установленной длины:
  mixedArr.splice(passwordLength);

  // Проверки на наличие в массиве хотя бы одного элемента, каждого массива:
  if (arr1 === numbers) {
    findNumbers = mixedArr.some((r) => numbers.includes(r));
  }

  if (arr2 === letters) {
    findLetters = mixedArr.some((r) => letters.includes(r));
  }

  if (arr3 === capitals) {
    findCapitals = mixedArr.some((r) => capitals.includes(r));
  }

  if (arr4 === symbols) {
    findSymbols = mixedArr.some((r) => symbols.includes(r));
  }

  if (findNumbers === false || findLetters === false || findCapitals === false || findSymbols === false) {
    getPassword(passwordProps);
  } else {
    return (password = mixedArr.join(''));
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  getPassword(passwordProps);
showPassword.value = password;
});