// _______________________ task 1______start

// Написать функцию для перевертывания букв во всех словах предложения.
// Пример: func('Abc def, ght.') => 'Cba fed, thg.' // cbA ,fed .thg

// v1
console.log('>>>>>Task 1. Reverse words<<<<<');

const reverseString = (str) => str.split(' ') // разбили предложение на слова
  .map(
    ((el) => el.split('') // каждое слово преобразовали в массив символов
      .reverse() // к полученному массиву применили метод массивов reverse и перевернули массив
      .join('')), // массив символов преобразовали в строку
  )
  .join(' '); // массив слов преобразовали в предложение

const string = 'Abc def, ght.';
console.log(`reverseString(${string}): ${reverseString(string)}`);

// v with regex
const reverseStr = (str) => str.split('').reverse().join('');

const reverseRegString = (str) => str.split(' ')
  .map(
    ((el) => el.replace(/(\w+)/, reverseStr(el))
    ),
  )
  .join(' ');

const stringSentence = 'Abc def, ght.';
console.log(`>>>!!!!!>>>>>>  reverseRegString(${stringSentence}): ${reverseRegString(stringSentence)}`);

// Метод split() принимает на вход строку и преобразует в массив, разбивая ее по разделителю.
// Метод reverse() переворачивает элементы массива. Первый элемент становится последним, последний — первым.
// Метод join() соединяет все элементы массива в строку.

// v2
const reverseRecurseString = (str) => ((str === '') ? '' : reverseRecurseString(str.substring(1)) + str.charAt(0));
console.log(`reverseRecurseString('Welcome') ${reverseRecurseString('Welcome')}`);
console.log(`reverseRecurseString('Abc def, ght.') ${reverseRecurseString('Abc def, ght.')}`);

// Метод substr() возвращает указанное количество символов из строки, начиная с указанной позиции.
// Если не указывать количество символов — вернет все символы, начиная с указанной позиции:
// 'hello'.substr(1); // 'ello'
// Метод charAt() возвращает указанный символ из строки:
// 'hello'.charAt(0); // 'h'

// v3
//  irregular
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/replace
let sentence = 'Abc def, ght.';
sentence = sentence.replace(/^\s+|\s+$/g, ' ');
console.log(sentence.replace(/^\s+|\s+$/g, ' '));

// _______________________ task 1______end

