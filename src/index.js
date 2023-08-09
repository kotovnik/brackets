module.exports = function check(str, bracketsConfig) {
// function check(str, bracketsConfig) {
  // f() которая проверяет есть ли в строке символы и удаляет их из строки получая новую строку 
  let resultString = str;   // переменная доступна, т.к. была объявлена снаружи цикла
  for (j = bracketsConfig.length - 1; j >= 0; j = j - 1) {
    for (i = bracketsConfig.length - 1; i >= 0; i = i - 1) {
      // console.log("i:" + i + " input string: " + resultString);
      // (начало; условие; шаг)
      // bracketsConfig[i - 1];  доступ к объекту массива по индексу
      // bracketsConfig.length длина массива  и  перебрать каждый объект массива
      // пока i >= 0 - идет перебоp
      let toStringElementBracketsConfig = bracketsConfig[i].join('');   // преобразовать объект(элемент массива) в строку, и получается без запятых
      // console.log("conf: " + toStringElementBracketsConfig);
      // так будет проверка на каждое условие - это условие внутри внешнего условия 
      while (resultString.includes(toStringElementBracketsConfig)) {    // делаем пока строка содержит брэкеты
        resultString = resultString.replace(toStringElementBracketsConfig, '');   // возвращает строку без брэкетов
        // console.log("process: " + resultString);
      } 
    };
    if (resultString === '') {    // true || false  узнаем стала ли строка пустой (это главное условие получение рез-та задачи)
      return true;    
    }
  };
  return false;
};


// function pow(x, n) {
//   if (n == 1) {        // if (lengthBracketsConfig === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// while (condition) {}

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

// console.log(check('([{}])', config3)); // -> true
// console.log(check('[(])', config2));
// console.log(check('|()|', config5)); // , true - (9)
// console.log(check('|()|(||)||', config5)); // , true - (11)
// console.log(check('111115611111111222288888822225577877778775555666677777777776622222', config6)); // , true - (12)
