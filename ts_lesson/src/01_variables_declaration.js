"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils/utils");
(0, utils_1.repeatComment)("Hello TypeScript !!!");
/*  📣 ======== 1. Variable declaration ======== */
/*  types
string, boolean, number, array, enum, union, any, void, never
*/
//---- Types inference - якщо не визначемо явно тип - його виводить TS
var myStr = "this is string";
// @ts-expect-error
myStr = 10; // Error
// Тут також працює inference - функція поверне string
function getStr() {
    return "Hello ";
}
var newStr = getStr();
function getNum() {
    return 10;
}
// newStr = getNum(); // Error
//---- Types declaration
var greet = "Hello TS";
greet = "Another string"; // OK
// greet = 12 // Errror
/* Який тип буде  у константи myConst ?
 Це називається  "string literal type" - значеня константи ніколи не змінюється
 */
var myConst = "I am string";
/* Але це не стосується константів, значення яких є об'єктом.
   Чому? Тому що object є mutable сутністю
 */
var myObj = {
    firstName: "Bill",
};
/* А який тип буде у змінної якщо їй не надати значення  ? */
/*  Тип any це зло. Він за фактом відключає всі подальші перевірки   */
var badType;
badType = 42;
badType = "this string"; // Це дуже погано !!! Адже тип z-any
/*  📣 ======== 2. Function type  ======== */
// @ts-expect-error
function add(a, b) { }
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
add(3, add(3, 4));
/*  ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ
1. tasks/01_task.ts
2. tasks/02_task.ts
3. tasks/03_task.ts
*/
/*  📣 ======== 3. Object type ======== */
function printWatch(watch) {
    console.log("".concat(watch.make, " ").concat(watch.year));
}
//🔺❗️ Uncomment
// printWatch({ make: "Constantin Vacheron", year: 2023 });
/* ======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ:
  5 => tasks/05_task.ts
  6 => tasks/06_task.ts
*/
/*  📣 ======== 4. Arrays ======== */
/* А який тип буде у порожнього масиву?   any !!!! */
var arr = [];
// @ts-expect-error
arr.push(33);
// @ts-expect-error
arr.push("string"); // теж можна - адже тип any, і перевірка типів вимкнена
/*  Так буде правильно  */
var myArr = [];
myArr.push(33);
// myArr.push("string") // Error
/* Ще один синтаксис декларування типу array  */
var strArr = ["more", "strings", "here"];
/*  📣 ======== 5. Tuple ======== */
/* це по суті масив з обмеженим length  */
var myTuple = [34, "Hello", false];
//@ts-expect-error
myTuple = [1, 2, 3]; // Error
// Но push краще не застосовувати з tuple
myTuple.push(1, 2, 3, 4); // OK -> 1,2,3,4 додадуться в tuple
// Або методи можна описувати так-> walk(): void
var probablyADuck = {
    walk: function () { return console.log("walking like a duck"); },
    swim: function () { return console.log("swimming like a duck"); },
    quack: function () { return console.log("quacking like a duck"); },
};
function FlyOverWater(bird) { }
FlyOverWater(probablyADuck); // OK
var arrOfStrings = ["first", "second"];
//----  але наприклад, якщо для такого типу викликати map - буде помилка
// arrOfStrings.map(); // ERROR  Property 'map' does not exist on type 'MyArrInterface'
//----  так буде  нормально
var stringArr = ["first", "second"];
var primaryContact = {
    id: 22,
    name: "Jim",
    birthDay: new Date("10-05-2020"),
};
var employee = {
    id: 0,
    name: "Bill",
};
/*
======================= 👩‍🎓 ЗАВДАННЯ СЛУХАЧАМ
10 => tasks/10_task.ts
11 => tasks/11_task.ts
12 => tasks/12_task.ts
 */
/*  📣 ======== 7. Literal types ======== */
/*  Literal type  */
// Це наступний тип
var num;
num = 3;
//@ts-expect-error - error
num = 44;
function animate(opts) { }
/*  📣 ======== 8. Union Type ======== */
/*  https://en.wikipedia.org/wiki/Union_(set_theory)  */
/*  https://en.wikipedia.org/wiki/Intersection_(set_theory)  */
/*  ==================================  */
var text;
text = "this is text";
text = null;
text = undefined;
var routeToAdminPage = function (role) { };
var routeToHomePage = function (role) { };
function redirect(user) {
    if (user) {
        routeToAdminPage(user.role);
    }
    else {
        routeToHomePage(user.email);
    }
}
/*  =================== Discriminated union  ==============  */
/*  ===== Example 1 */
function tryParseInt(text) {
    if (/^-?\d+$/.test(text)) {
        return {
            success: true,
            value: parseInt(text, 10),
        };
    }
    return {
        success: false,
        error: "Invalid number format",
    };
}
/* ================ mutable  ==================== */
/* ======= Example 1 */
{
    var type = "button";
    var buttonAttributes = {
        type: type,
    };
}
/* ============ example 2 */
{
    // variant 1 - single button
    var modifyButton = function (attributes) { };
    var buttonAttributes = {
        type: "button",
    };
    modifyButton(buttonAttributes);
    // variant 2 - array of buttons attributes
    var modifyButtons = function (attributes) { };
    var buttonsToChange = [
        {
            type: "button",
        },
        {
            type: "submit",
        },
    ];
    modifyButtons(buttonsToChange);
}
/* ------ usage  */
var sum = function (a, b) { return a + b; };
var subtract = function (a, b) { return a - b; };
/* ------------- void  */
function firstFn(callback) {
    setTimeout(callback, 2000);
}
function secondFn(callback) {
    setTimeout(callback, 3000);
}
var nums = [];
//🔺❗️ Uncomment
// firstFn(() => nums.push(4)); // 🚨 ERROR
//🔺❗️ Uncomment
// secondFn(() => nums.push(4)); // ✔️ OK
