function mainMenu() {
    let choice = prompt(
        "Виберіть задачу для виконання:\n" +
        "1: Додавання 0.1 і 0.2\n" +
        "2: Додавання рядка '1' і числа 2\n" +
        "3: Розрахунок кількості файлів на флешці\n" +
        "4: Розрахунок кількості шоколадок і здачі\n" +
        "5: Виведення тризначного числа задом наперед\n" +
        "6: Розрахунок відсотків за вкладом\n" +
        "7: Перевірка логічних виразів\n" +
        "0: Вийти"
    );

    switch (choice) {
        case "1":
            // Додавання 0.1 і 0.2
            let a = 0.1;
            let b = 0.2;
            let result = +(a + b).toFixed(1);
            alert(`Результат додавання 0.1 і 0.2: ${result}`);
            break;

        case "2":
            // Додавання рядка "1" і числа 2
            let str = "1";
            let num = 2;
            let sum = Number(str) + num;
            alert(`Результат додавання рядка '1' і числа 2: ${sum}`);
            break;

        case "3":
            // Розрахунок кількості файлів на флешці
            let flashSizeGB = prompt("Введіть обсяг флешки у Гб:");
            let flashSizeMB = flashSizeGB * 1024; // Переводимо Гб у Мб
            let fileSizeMB = 820;
            let fileCount = Math.floor(flashSizeMB / fileSizeMB);
            alert(`На флешку поміститься ${fileCount} файлів.`);
            break;

        case "4":
            // Розрахунок кількості шоколадок і здачі
            let money = prompt("Скільки грошей у вашому гаманці?");
            let chocolatePrice = prompt("Яка ціна однієї шоколадки?");
            let chocolates = Math.floor(money / chocolatePrice);
            let change = money % chocolatePrice;
            alert(`Ви можете купити ${chocolates} шоколадок, залишиться ${change} грн.`);
            break;

        case "5":
            // Виведення тризначного числа задом наперед
            let number = prompt("Введіть тризначне число:");
            let reversed = number % 10 * 100 + Math.floor(number / 10) % 10 * 10 + Math.floor(number / 100);
            alert(`Число задом наперед: ${reversed}`);
            break;

        case "6":
            // Розрахунок відсотків за вкладом
            let deposit = prompt("Введіть суму вкладу:");
            let annualRate = 5; // річна ставка
            let months = 2;
            let interest = deposit * (annualRate / 100) * (months / 12);
            alert(`Нараховані відсотки за 2 місяці: ${interest.toFixed(2)} грн.`);
            break;

        case "7":
            // Перевірка логічних виразів
            alert(
                `Результати виразів:\n` +
                `2 && 0 && 3 => ${2 && 0 && 3}\n` +
                `2 || 0 || 3 => ${2 || 0 || 3}\n` +
                `2 && 0 || 3 => ${2 && 0 || 3}`
            );
            break;

        case "0":
            // Вихід з програми
            alert("Дякую за використання програми!");
            return;

        default:
            alert("Невірний вибір. Спробуйте ще раз.");
            break;
    }

    mainMenu(); // Повертаємося до головного меню
}

mainMenu(); // Запускаємо головне меню