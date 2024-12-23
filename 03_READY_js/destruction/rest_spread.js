// Rest оператор => застосовується при декларуванні функції

// Spread оператор - дозволяє перетворювати значення
// масивів та об'єктів у кілька змінних
// Наприклад, у кілька аргументів (при викликах функції)

function sum1(...arr) {
  console.log(arr);
  console.log(sum(...arr));
}
sum1(1, 2, 3);

function sum(a, b, c) {
  return a + b + c;
}