document.addEventListener("DOMContentLoaded", function () {
    const tasks = [
        "Визначення вікової категорії",
        "Спецсимвол на клавіші",
        "Сума чисел у діапазоні",
        "Найбільший спільний дільник (НСД)",
        "Всі дільники числа",
        "Перевірка числа на паліндром",
        "Підрахунок суми зі знижкою",
        "Статистика введених чисел",
        "Відображення днів тижня",
    ];

    let menu = "Оберіть задачу:\n";
    tasks.forEach((task, index) => {
        menu += `${index + 1}. ${task}\n`;
    });

    let choice = prompt(menu);

    switch (choice) {
        case "1":
            let age = prompt("Введіть ваш вік:");
            if (isNaN(age) || age < 0) {
                alert("Неправильний ввід!");
            } else if (age <= 11) {
                alert("Ви дитина.");
            } else if (age <= 17) {
                alert("Ви підліток.");
            } else if (age <= 59) {
                alert("Ви дорослий.");
            } else {
                alert("Ви пенсіонер.");
            }
            break;

        case "2":
            let key = prompt("Введіть число від 0 до 9:");
            const symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
            if (key >= 0 && key <= 9) {
                alert(`Спецсимвол на клавіші ${key}: ${symbols[key]}`);
            } else {
                alert("Неправильний ввід!");
            }
            break;

        case "3":
            let start = parseInt(prompt("Введіть початок діапазону:"));
            let end = parseInt(prompt("Введіть кінець діапазону:"));
            if (isNaN(start) || isNaN(end) || start > end) {
                alert("Неправильний ввід!");
            } else {
                let sum = 0;
                for (let i = start; i <= end; i++) {
                    sum += i;
                }
                alert(`Сума чисел у діапазоні: ${sum}`);
            }
            break;

        case "4":
            let num1 = parseInt(prompt("Введіть перше число:"));
            let num2 = parseInt(prompt("Введіть друге число:"));
            if (isNaN(num1) || isNaN(num2)) {
                alert("Неправильний ввід!");
            } else {
                while (num2) {
                    [num1, num2] = [num2, num1 % num2];
                }
                alert(`Найбільший спільний дільник: ${num1}`);
            }
            break;

        case "5":
            let number = parseInt(prompt("Введіть число:"));
            if (isNaN(number) || number <= 0) {
                alert("Неправильний ввід!");
            } else {
                let divisors = [];
                for (let i = 1; i <= number; i++) {
                    if (number % i === 0) divisors.push(i);
                }
                alert(`Дільники числа: ${divisors.join(", ")}`);
            }
            break;

        case "6":
            let palindromeNum = prompt("Введіть п'ятирозрядне число:");
            if (palindromeNum.length !== 5 || isNaN(palindromeNum)) {
                alert("Це не п'ятирозрядне число!");
            } else if (palindromeNum === palindromeNum.split("").reverse().join("")) {
                alert("Це паліндром!");
            } else {
                alert("Це не паліндром!");
            }
            break;

        case "7":
            let purchase = parseFloat(prompt("Введіть суму покупки:"));
            if (isNaN(purchase) || purchase < 0) {
                alert("Неправильний ввід!");
            } else {
                let discount = 0;
                if (purchase >= 200 && purchase < 300) discount = 3;
                else if (purchase >= 300 && purchase < 500) discount = 5;
                else if (purchase >= 500) discount = 7;
                let finalPrice = purchase - (purchase * discount) / 100;
                alert(`Сума до оплати зі знижкою (${discount}%): ${finalPrice.toFixed(2)}`);
            }
            break;

        case "8":
            let positive = 0, negative = 0, zeros = 0, even = 0, odd = 0;
            for (let i = 0; i < 10; i++) {
                let input = parseInt(prompt(`Введіть число ${i + 1} з 10:`));
                if (isNaN(input)) {
                    alert("Це не число!");
                    i--; // повторити ітерацію
                } else {
                    if (input > 0) positive++;
                    if (input < 0) negative++;
                    if (input === 0) zeros++;
                    if (input % 2 === 0) even++;
                    else odd++;
                }
            }
            alert(`Додатніх: ${positive}, Від'ємних: ${negative}, Нулів: ${zeros}, Парних: ${even}, Непарних: ${odd}`);
            break;

        case "9":
            const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
            let dayIndex = 0;
            while (confirm(`День тижня: ${days[dayIndex]}. Хочете побачити наступний день?`)) {
                dayIndex = (dayIndex + 1) % 7;
            }
            break;

        default:
            alert("Неправильний вибір!");
    }
});