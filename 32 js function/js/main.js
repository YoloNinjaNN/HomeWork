function declarationExample() {
  alert("Це функція, оголошена через Function Declaration");
}


const expressionExample = function () {
  alert("Це функція, оголошена через Function Expression");
};


const arrowFunctionExample = () => {
  alert("Це функція, оголошена через Arrow Function");
};


(function () {
  alert("Це анонімна функція, викликана одразу");
})();


const objectExample = {
  method() {
      alert("Це функція, оголошена як метод об'єкта");
  },
};


class ClassExample {
  method() {
      alert("Це функція, оголошена як метод класу");
  }
}


declarationExample();
expressionExample();
arrowFunctionExample();
objectExample.method();
const classInstance = new ClassExample();
classInstance.method();


function countArguments(...args) {
  alert(`Кількість аргументів: ${args.length}`);
}


function compareNumbers(a, b) {
  let result;
  if (a < b) result = -1;
  else if (a > b) result = 1;
  else result = 0;
  alert(`Результат порівняння ${a} і ${b}: ${result}`);
}


function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
alert(`Факторіал числа 5: ${factorial(5)}`);


function combineDigits(a, b, c) {
  const number = parseInt(`${a}${b}${c}`);
  alert(`Об'єднання цифр ${a}, ${b}, ${c}: ${number}`);
}


function calculateArea(length, width = length) {
  const area = length * width;
  alert(`Площа з параметрами (${length}, ${width}): ${area}`);
}


countArguments(1, 2, 3, 4);
compareNumbers(5, 10);
combineDigits(1, 4, 9);
calculateArea(5, 10);
calculateArea(5);
