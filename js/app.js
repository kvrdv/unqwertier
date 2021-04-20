// Массивы символов, из которых формируется пароль:
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
const passwordProps = [emptyArr, emptyArr, emptyArr, emptyArr, 8];
const propCheck = document.querySelectorAll('.prop-check');
let warning = document.querySelector('.property-name-length');

// Переменные для проверки сгенерированного пароля на содержание необходимых типов символов:
let findNumbers = true;
let findLetters = true;
let findCapitals = true;
let findSymbols = true;

// Кнопка генерации пароля:
const button = document.querySelector('.button');
const copyWarning = document.querySelector('.show-password-warning');

// Вывод пароля:
let showPassword = document.querySelector('.show-password');

function getLength(passwordProps) {
  // Получаем длину пароля:
  let length = document.querySelector('.prop-length');

  if (length.value < 4) {
    warning.innerText = 'min 4';
    length.value = 4;
    return (passwordProps[4] = 4);
  } else if (length.value > 16) {
    warning.innerText = 'max 16';
    length.value = 16;
    return (passwordProps[4] = 16);
  } else {
    return (passwordProps[4] = length.value);
  }
}

// Функция генерации массива с параметрами пароля:
function getProps(propCheck, passwordProps) {
  // Получаем параметры в соответствии с выставленными чекбоксами:
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

  return passwordProps;
}

// Функция генерации пароля с установленными параметрами:
function getPass([arr1, arr2, arr3, arr4, passwordLength]) {
  // Объединяем и перемешиваем в один массив все досутпые символы:
  let mixedArr = arr1.concat(arr2, arr3, arr4).sort(function () {
    return Math.random() - 0.5;
  });
  // Обрезаем до установленной длины:
  mixedArr.splice(passwordLength);

  // Проверка сгенерированного пароля на содержание необходимых типов символов:
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
    getPass(passwordProps);
  } else {
    return (password = mixedArr.join(''));
  }
}

button.addEventListener('click', (event) => {
  event.preventDefault();
  warning.innerText = 'length';
  getLength(passwordProps);
  getProps(propCheck, passwordProps);
  getPass(passwordProps);
  showPassword.value = password;
  if (showPassword.value === '') {
    copyWarning.innerHTML = 'select at least one property';
    copyWarning.classList.remove('hidden');
    setTimeout(function () {
      copyWarning.classList.add('hidden');
    }, 1200);
  } else {
    navigator.clipboard.writeText(password);
    copyWarning.innerHTML = 'copied to clipboard';
    copyWarning.classList.remove('hidden');
    setTimeout(function () {
      copyWarning.classList.add('hidden');
    }, 1200);
  }
});
