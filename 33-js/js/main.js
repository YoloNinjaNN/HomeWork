// === Завдання 1: Об'єкт автомобіля ===
const car = {
    manufacturer: "Toyota",
    model: "Corolla",
    year: 2020,
    avgSpeed: 80, 
    fuelTank: 50, 
    fuelConsumption: 6.5,
    drivers: [],

    displayInfo() {
        return `
            Виробник: ${this.manufacturer}
            Модель: ${this.model}
            Рік випуску: ${this.year}
            Середня швидкість: ${this.avgSpeed} км/год
            Обсяг паливного баку: ${this.fuelTank} літрів
            Середня витрата палива: ${this.fuelConsumption} літрів на 100 км
            Водії: ${this.drivers.length > 0 ? this.drivers.join(", ") : "Відсутні"}
        `;
    },

    addDriver(name) {
        if (!this.drivers.includes(name)) {
            this.drivers.push(name);
            return `Водія ${name} додано.`;
        } else {
            return `Водій ${name} вже є в списку.`;
        }
    },

    checkDriver(name) {
        return this.drivers.includes(name)
            ? `Водій ${name} є у списку.`
            : `Водія ${name} немає у списку.`;
    },

    calculateTrip(distance) {
        const travelTimeWithoutBreaks = distance / this.avgSpeed;
        const breaks = Math.floor(travelTimeWithoutBreaks / 4);
        const totalTime = travelTimeWithoutBreaks + breaks; 
        const fuelNeeded = (distance / 100) * this.fuelConsumption; 

        return `
            Для подолання ${distance} км необхідно:
            - Часу: ${totalTime.toFixed(2)} годин (включаючи ${breaks} перерви)
            - Палива: ${fuelNeeded.toFixed(2)} літрів
        `;
    },
};

// === Завдання 2: Об'єкт часу ===
const time = {
    hours: 20,
    minutes: 59,
    seconds: 45,


    displayTime() {
        return `Час: ${this.hours.toString().padStart(2, "0")}:${this.minutes
            .toString()
            .padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`;
    },


    addSeconds(sec) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + sec;
        this.updateTime(totalSeconds);
        return this.displayTime();
    },


    addMinutes(min) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + min * 60;
        this.updateTime(totalSeconds);
        return this.displayTime();
    },


    addHours(hrs) {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds + hrs * 3600;
        this.updateTime(totalSeconds);
        return this.displayTime();
    },

 
    updateTime(totalSeconds) {
        const daySeconds = totalSeconds % 86400;
        this.hours = Math.floor(daySeconds / 3600);
        this.minutes = Math.floor((daySeconds % 3600) / 60);
        this.seconds = daySeconds % 60;
    },
};

// === Меню вибору завдання ===
function mainMenu() {
    const task = prompt(
        "Оберіть завдання:\n1 - Об'єкт автомобіля\n2 - Об'єкт часу\n0 - Вихід"
    );

    switch (task) {
        case "1":
            carMenu();
            break;
        case "2":
            timeMenu();
            break;
        case "0":
            alert("Дякуємо за використання програми!");
            break;
        default:
            alert("Невірний вибір. Спробуйте ще раз.");
            mainMenu();
    }
}


function carMenu() {
    const action = prompt(
        "Оберіть дію:\n1 - Показати інформацію про автомобіль\n2 - Додати водія\n3 - Перевірити водія\n4 - Розрахувати поїздку\n0 - Повернутися до головного меню"
    );

    switch (action) {
        case "1":
            alert(car.displayInfo());
            carMenu();
            break;
        case "2":
            const newDriver = prompt("Введіть ім'я водія:");
            alert(car.addDriver(newDriver));
            carMenu();
            break;
        case "3":
            const driverName = prompt("Введіть ім'я водія для перевірки:");
            alert(car.checkDriver(driverName));
            carMenu();
            break;
        case "4":
            const distance = +prompt("Введіть відстань (км):");
            alert(car.calculateTrip(distance));
            carMenu();
            break;
        case "0":
            mainMenu();
            break;
        default:
            alert("Невірний вибір. Спробуйте ще раз.");
            carMenu();
    }
}


function timeMenu() {
    const action = prompt(
        "Оберіть дію:\n1 - Показати поточний час\n2 - Додати секунди\n3 - Додати хвилини\n4 - Додати години\n0 - Повернутися до головного меню"
    );

    switch (action) {
        case "1":
            alert(time.displayTime());
            timeMenu();
            break;
        case "2":
            const sec = +prompt("Введіть кількість секунд:");
            alert(time.addSeconds(sec));
            timeMenu();
            break;
        case "3":
            const min = +prompt("Введіть кількість хвилин:");
            alert(time.addMinutes(min));
            timeMenu();
            break;
        case "4":
            const hrs = +prompt("Введіть кількість годин:");
            alert(time.addHours(hrs));
            timeMenu();
            break;
        case "0":
            mainMenu();
            break;
        default:
            alert("Невірний вибір. Спробуйте ще раз.");
            timeMenu();
    }
}

mainMenu();
