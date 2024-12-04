// 1) Перелік всіх можливих способів створення функцій у JavaScript

// Оголошення функції (Function Declaration)
function declarationExample() {
  alert("Це функція, оголошена через Function Declaration");
}

// Функціональний вираз (Function Expression)
const expressionExample = function () {
  alert("Це функція, оголошена через Function Expression");
};

// Стрілочна функція (Arrow Function)
const arrowFunctionExample = () => {
  alert("Це функція, оголошена через Arrow Function");
};

// Анонімна функція (викликається одразу)
(function () {
  alert("Це анонімна функція, викликана одразу");
})();

// Метод у об'єкті
const objectExample = {
  method() {
      alert("Це функція, оголошена як метод об'єкта");
  },
};

// Класова функція
class ClassExample {
  method() {
      alert("Це функція, оголошена як метод класу");
  }
}

// Виклики функцій першого завдання
declarationExample();
expressionExample();
arrowFunctionExample();
objectExample.method();
const classInstance = new ClassExample();
classInstance.method();

// 2) Функція, яка виводить кількість переданих їй аргументів
function countArguments(...args) {
  alert(`Кількість аргументів: ${args.length}`);
}

// 3) Функція порівняння двох чисел
function compareNumbers(a, b) {
  let result;
  if (a < b) result = -1;
  else if (a > b) result = 1;
  else result = 0;
  alert(`Результат порівняння ${a} і ${b}: ${result}`);
}

// 4) Функція обчислення факторіалу
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
alert(`Факторіал числа 5: ${factorial(5)}`);

// 5) Функція, яка перетворює три цифри в одне число
function combineDigits(a, b, c) {
  const number = parseInt(`${a}${b}${c}`);
  alert(`Об'єднання цифр ${a}, ${b}, ${c}: ${number}`);
}

// 6) Функція обчислення площі прямокутника або квадрата
function calculateArea(length, width = length) {
  const area = length * width;
  alert(`Площа з параметрами (${length}, ${width}): ${area}`);
}

// Виклики функцій
countArguments(1, 2, 3, 4);
compareNumbers(5, 10);
combineDigits(1, 4, 9);
calculateArea(5, 10);
calculateArea(5);
