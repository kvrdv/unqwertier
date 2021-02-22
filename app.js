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
const passwordProps = [numbers, letters, capitals, symbols, 12];

function getPassword([arr1, arr2, arr3, arr4, passwordLength]) {
  // Объединяем и перемешиваем в один массив все досутпые символы:
  let mixedArr = arr1.concat(arr2, arr3, arr4).sort(function () {
    return Math.random() - 0.5;
  });
  // Обрезаем до установленной длины:
  mixedArr.splice(passwordLength);  

  // Делаем проверки на наличие в массиве хотя бы одного элемента, каждого массива:
  let findNumbers = true;
  let findLetters = true;
  let findCapitals = true;
  let findSymbols = true;

  if (arr1 === numbers) {
    findNumbers = mixedArr.some((r) => numbers.includes(r));
  };

  if (arr2 === letters) {
    findLetters = mixedArr.some((r) => letters.includes(r));
  };

  if (arr3 === capitals) {
    findCapitals = mixedArr.some((r) => capitals.includes(r));
  };

  if (arr4 === symbols) {
    findSymbols = mixedArr.some((r) => symbols.includes(r));
  };

  if ((findNumbers === false) || (findLetters === false) || (findCapitals === false) || (findSymbols === false)) {
    getPassword(passwordProps);
  } else {
    return (password = mixedArr.join(''));
  }
}

getPassword(passwordProps);