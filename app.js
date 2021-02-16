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
const emtyArray = [];

function getPassword(arr1, arr2, arr3, arr4, passwordLength) {
  const mixed = arr1.concat(arr2, arr3, arr4);
  const shuffled = mixed.sort(function () {
    return Math.random() - 0.5;
  });
  shuffled.splice(passwordLength);
  const password = shuffled.join('');
  console.log(password);  
  return password;
}

getPassword(numbers, letters, emtyArray, emtyArray, 17);




// alert( animals.indexOf( 'dog' ) != -1 );