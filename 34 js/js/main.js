// Створення масиву "Список покупок"
let shoppingList = [
    { name: 'Молоко', quantity: 2, isBought: false, pricePerUnit: 30 },
    { name: 'Хліб', quantity: 1, isBought: true, pricePerUnit: 20 },
    { name: 'Яблука', quantity: 5, isBought: false, pricePerUnit: 10 },
    { name: 'Кава', quantity: 1, isBought: true, pricePerUnit: 100 }
];

// Функція для виведення списку покупок
function displayShoppingList(list) {
    console.log('Список покупок:');
    list.forEach(item => {
        const status = item.isBought ? 'придбано' : 'не придбано';
        const totalPrice = item.quantity * item.pricePerUnit;
        console.log(`- ${item.name}: кількість ${item.quantity}, ціна за одиницю ${item.pricePerUnit}, всього ${totalPrice} (${status})`);
    });
}

// Функція для позначення продукту як придбаного
function buyProduct(list, productName) {
    const product = list.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (product) {
        if (!product.isBought) {
            product.isBought = true;
            console.log(`Продукт "${productName}" позначено як придбаний.`);
        } else {
            console.log(`Продукт "${productName}" вже придбано.`);
        }
    } else {
        console.log(`Продукт "${productName}" не знайдено у списку.`);
    }
}

// Функція для видалення продукту зі списку
function removeProduct(list, productName) {
    const updatedList = list.filter(item => item.name.toLowerCase() !== productName.toLowerCase());
    if (updatedList.length === list.length) {
        console.log(`Продукт "${productName}" не знайдено у списку.`);
    } else {
        console.log(`Продукт "${productName}" видалено зі списку.`);
    }
    return updatedList;
}

// Функція для додавання покупки до списку
function addProduct(list, productName, quantity, pricePerUnit) {
    const existingProduct = list.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (existingProduct) {
        // Оновлюємо кількість
        existingProduct.quantity += quantity;
        console.log(`Кількість продукту "${productName}" збільшено до ${existingProduct.quantity}.`);
    } else {
        // Додаємо новий продукт до списку
        list.push({
            name: productName,
            quantity,
            isBought: false,
            pricePerUnit
        });
        console.log(`Продукт "${productName}" додано до списку.`);
    }
    return list;
}

// Приклад використання
console.log("=== Початковий список ===");
displayShoppingList(shoppingList);

console.log("\n=== Купівля продукту: Яблука ===");
buyProduct(shoppingList, 'Яблука');
displayShoppingList(shoppingList);

console.log("\n=== Видалення продукту: Хліб ===");
shoppingList = removeProduct(shoppingList, 'Хліб');
displayShoppingList(shoppingList);

console.log("\n=== Додавання нового продукту: Банани ===");
shoppingList = addProduct(shoppingList, 'Банани', 3, 15);
displayShoppingList(shoppingList);

console.log("\n=== Додавання до існуючого продукту: Молоко ===");
shoppingList = addProduct(shoppingList, 'Молоко', 1, 30);
displayShoppingList(shoppingList);
