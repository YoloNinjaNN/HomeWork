const userName = prompt("Введіть своє ім'я");
alert("Привіт, " + userName + "!");
alert(`Привіт, ${userName}`);

const currentYear = 2024;

const birthYear = prompt("Введіть рік свого народження");
const userAge = currentYear - birthYear;
alert(`Твій вік: ${userAge} років`);


const width = prompt("Введіть ширину сторони квадрата");
const perim = width * 4;
alert("Периметр становить" + perim);


let radius = parseFloat(prompt("Введіть радіус кола:"));
if (!isNaN(radius) && radius > 0) {
    let area = Math.PI * Math.pow(radius, 2);
    alert(`Площа кола з радіусом ${radius} дорівнює ${area.toFixed(2)}.`);
} else {
    alert("Будь ласка, введіть правильне число для радіуса.");
}

let distance = parseFloat(prompt("Введіть відстань між містами (в кілометрах):"));
let time = parseFloat(prompt("Скільки годин ви хочете витратити на дорогу?"));
if (!isNaN(distance) && distance > 0 && !isNaN(time) && time > 0) {
    let speed = distance / time;
    alert(`Щоб дістатися за ${time} годин, потрібно їхати зі швидкістю ${speed.toFixed(2)} км/год.`);
} else {
    alert("Будь ласка, введіть правильні значення для відстані і часу.");
}

const exchangeRate = 0.92; // Курс долара до євро (можна змінити на актуальний)
let dollars = parseFloat(prompt("Введіть суму в доларах:"));
if (!isNaN(dollars) && dollars >= 0) {
    let euros = dollars * exchangeRate;
    alert(`${dollars} доларів дорівнює ${euros.toFixed(2)} євро за курсом ${exchangeRate}.`);
} else {
    alert("Будь ласка, введіть правильне значення для суми в доларах.");
}