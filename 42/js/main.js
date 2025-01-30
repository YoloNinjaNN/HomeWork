// 1) Клас, що описує коло
class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.error("Радіус має бути більше нуля");
        }
    }

    get diameter() {
        return this._radius * 2;
    }

    getArea() {
        return Math.PI * this._radius ** 2;
    }

    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}

const circle = new Circle(5);
console.log("Радіус:", circle.radius);
console.log("Діаметр:", circle.diameter);
console.log("Площа:", circle.getArea());
console.log("Довжина кола:", circle.getCircumference());

// 2) Клас, що описує маркер
class Marker {
    constructor(color, inkLevel) {
        this.color = color;
        this.inkLevel = inkLevel;
    }

    print(text) {
        let printedText = "";
        for (let char of text) {
            if (this.inkLevel <= 0) break;
            if (char !== ' ') this.inkLevel -= 0.5;
            printedText += char;
        }
        console.log(`%c${printedText}`, `color: ${this.color}`);
    }
}

class RefillableMarker extends Marker {
    refill() {
        this.inkLevel = 100;
    }
}

const marker = new RefillableMarker("blue", 10);
marker.print("Hello, world!");
marker.refill();
marker.print("Refilled marker!");

// 3) Клас Employee та EmpTable
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

class EmpTable {
    constructor(employees) {
        this.employees = employees;
    }

    getHtml() {
        let html = `<table border="1" style="border-collapse: collapse; width: 100%; text-align: left;">
                      <tr>
                        <th style="border: 1px solid black; padding: 8px;">Ім'я</th>
                        <th style="border: 1px solid black; padding: 8px;">Посада</th>
                        <th style="border: 1px solid black; padding: 8px;">Зарплата</th>
                      </tr>`;
        this.employees.forEach(emp => {
            html += `<tr>
                        <td style="border: 1px solid black; padding: 8px;">${emp.name}</td>
                        <td style="border: 1px solid black; padding: 8px;">${emp.position}</td>
                        <td style="border: 1px solid black; padding: 8px;">${emp.salary}</td>
                     </tr>`;
        });
        html += "</table>";
        return html;
    }
}

const employees = [
    new Employee("Олег", "Менеджер", 5000),
    new Employee("Анна", "Дизайнер", 4000),
    new Employee("Іван", "Розробник", 6000)
];

const empTable = new EmpTable(employees);
document.write(empTable.getHtml());
