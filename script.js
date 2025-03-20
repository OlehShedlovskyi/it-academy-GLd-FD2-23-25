//перепенная - примеры

// // Вывод сообщения
// alert('Привет, мир! 🚀');
//
// // Изменение текста на странице
// document.querySelector('h1').textContent = 'JS это круто!';
//
// // Обработчик клика на кнопке
// document.querySelector('button').addEventListener('click', () => {
//     console.log('Кнопка нажата!');
// });

// // Число
// let score = 0;
// score = score + 10; // Увеличили счет на 10
//
// // Строка (текст)
// const userName = "Игорь";
// console.log("Привет, " + userName); // "Привет, Игорь"
//
// // Булево значение (true/false)
// let isOnline = true;
// isOnline = false; // Пользователь вышел из сети


// let message = "Я изучаю JS!";
// console.log(message); // Выведет текст
//
// const hoursInDay = 24;
// console.log("В сутках " + hoursInDay + " часа");
//
// // Меняем значение
// let counter = 0;
// counter = counter + 1;
// console.log(counter); // 1

//swift - приверы

// let buttonNumber = 100; // Допустим, нажали кнопку 2
//
// switch (buttonNumber) {
//     case 1:
//         console.log("Выдаю воду 💧");
//         break; // Остановись здесь, дальше не проверяй!
//     case 2:
//         console.log("Выдаю сок 🧃");
//         break;
//     case 3:
//         console.log("Выдаю чай ☕");
//         break;
//     default:
//         console.log("Такого напитка нет 😢");
// }
// // Выведется: "Выдаю сок 🧃"

// let день = "пятница"; // Меняй это значение
//
// switch (день) {
//     case "понедельник":
//         console.log("Сегодня понедельник. Время начинать новую неделю! 💪");
//         break;
//     case "вторник":
//         console.log("Сегодня вторник. Работаем дальше! 🛠️");
//         break;
//     case "среда":
//         console.log("Сегодня среда. Маленькая победа — неделя на середине! 🎉");
//         break;
//     case "четверг":
//         console.log("Сегодня четверг. Скоро выходные! 🥳");
//         break;
//     case "пятница":
//         console.log("Сегодня пятница! Ура, вечером отдыхаем! 🍕");
//         break;
//     case "суббота":
//         console.log("Сегодня суббота. Время для себя! 🎮");
//         break;
//     case "воскресенье":
//         console.log("Сегодня воскресенье. Завтра снова понедельник... 😴");
//         break;
//     default:
//         console.log("Такого дня недели не существует! 🕵️");
// }


// объекты примеры

// let кот = {
//     имя: "Барсик",
//     возраст: 3,
//     цвет: "рыжий",
//     любимаяЕда: "рыба"
// };
//
// console.log(кот.имя); // Выведет: Барсик
// console.log(кот.возраст); // Выведет: 3
//
// кот.возраст = 4;
// console.log(кот.возраст); // Выведет: 4
//
// кот.любимаяИгрушка = "мячик";
// console.log(кот.любимаяИгрушка); // Выведет: мячик

//рекурсия

// function обратныйОтсчёт(n) {
//     if (n === 0) { // Базовый случай: когда досчитали до 0
//         console.log("Пуск!");
//     } else { // Рекурсивный шаг
//         console.log(n); // Показываем текущее число
//         обратныйОтсчёт(n - 1); // Запускаем обратный отсчёт для n-1
//     }
// }
//
// обратныйОтсчёт(5); // Начнём с 5
// // Выведет: 5, 4, 3, 2, 1, Пуск!

// function открытьМатрешку(n) {
//     if (n === 1) { // Базовый случай: самая маленькая матрёшка
//         console.log("Достал маленькую матрёшку!");
//     } else {
//         console.log(`Открыл матрёшку уровня ${n}`);
//         открытьМатрешку(n - 1); // Открываем следующую
//     }
// }
//
// открытьМатрешку(3);
// Выведет:
// Открыл матрёшку уровня 3
// Открыл матрёшку уровня 2
// Достал маленькую матрёшку!

// function сумма(n) {
//     if (n === 1) { // Базовый случай: последнее число — 1
//         return 1;
//     } else { // Рекурсивный шаг
//         return n + сумма(n - 1); // n + сумма всех предыдущих
//     }
// }
//
// console.log(сумма(5)); // 15 (5 + 4 + 3 + 2 + 1)

//Rest параметры

// function shareCandies(firstFriend, secondFriend, ...restCandies) {
//     console.log(`Первый друг получает: ${firstFriend}`);
//     console.log(`Второй друг получает: ${secondFriend}`);
//     console.log(`А это мои конфеты: ${restCandies}`);
// }
//
// shareCandies("🍫", "🍭", "🍩", "🍪", "🍬");
// // Выведет:
// // "Первый друг получает: 🍫"
// // "Второй друг получает: 🍭"
// // "А это мои конфеты: 🍩,🍪,🍬"

//Оператор Spread

// const box1 = ["🧸", "🚗"];
// const box2 = ["🎮", "📚"];
//
// const bigBox = [...box1, ...box2]; // Раскрываем обе коробки
// console.log(bigBox); // ["🧸", "🚗", "🎮", "📚"]

// const oldToys = ["⚽", "🎲"];
// const newToys = [...oldToys, "🎨"]; // Копируем старые и добавляем новое
// console.log(newToys); // ["⚽", "🎲", "🎨"]

//Где ещё используют Spread?

// const cat = { name: "Барсик", age: 2 };
// const catClone = { ...cat, color: "рыжий" }; // Копируем и добавляем свойство
// console.log(catClone); // { name: "Барсик", age: 2, color: "рыжий" }
//
// function giveCandies(a, b, c) {
//     console.log(`Дети получают: ${a}, ${b}, ${c}`);
// }
//
// const candies = ["🍭", "🍪", "🍩"];
// giveCandies(...candies); // Раскрываем массив: giveCandies("🍭", "🍪", "🍩")
// // Выведет: "Дети получают: 🍭, 🍪, 🍩"

//Цикл while — «Пока что-то верно, делай это»

// let steps = 1; // Начинаем с первого шага
//
// while (steps <= 5) { // Пока шагов меньше или равно 5
//     console.log(`Шаг номер ${steps}`);
//     steps = steps + 1; // Увеличиваем шаг на 1
// }

// Выведет:
// "Шаг номер 1"
// "Шаг номер 2"
// ... и так до "Шаг номер 5"

//Цикл for — «Делай это ровно N раз»

// for (начало; условие; шаг)
// for (let plate = 1; plate <= 5; plate++) {
//     console.log(`Помыл тарелку номер ${plate}`);
// }

// Выведет:
// "Помыл тарелку номер 1"
// "Помыл тарелку номер 2"
// ... и так до 5

//объекты в JavaScript,

// let car = {
//     color: "красная 🚗", // Свойство color (цвет)
//     wheels: 4,           // Свойство wheels (колеса)
//     speed: "быстрая"     // Свойство speed (скорость)
// };
//
// console.log(car.color);   // "красная 🚗" (через точку)
// console.log(car["speed"]); // "быстрая"    (через квадратные скобки)
//
// car.color = "синяя 🔵"; // Меняем цвет
// console.log(car.color); // "синяя 🔵"
//
// car.horn = "бип-бип! 📢"; // Добавили свойство horn
// console.log(car.horn);    // "бип-бип! 📢"
//
// car.beep = function() {
//     console.log("БИИИП! 🚨");
// };
//
// car.beep(); // Вызов метода: выведет "БИИИП! 🚨"

// let dog = {
//     name: "Шарик",
//     age: 3,
//     bark: function() {
//         console.log("Гав-гав! 🐾");
//     }
// };
//
// console.log(dog.name); // "Шарик"
// dog.bark();            // "Гав-гав! 🐾"

// Конструктор — это «формочка» для объектов

// Создаем формочку (конструктор)
// function ToyCar(color, speed) {
//     // Свойства будущей машинки
//     this.color = color;
//     this.speed = speed;
//
//     // Метод (что умеет машинка)
//     this.beep = function() {
//         console.log("Бип-бип! 🚗");
//     };
// }
// //Оператор new — создаем печеньки (объекты)
//
// let car1 = new ToyCar("красная", "быстрая");
// let car2 = new ToyCar("синяя", "медленная");
//
// console.log(car1.color); // "красная"
// car2.beep();             // "Бип-бип! 🚗"

// function Dog(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.bark = function() {
//         console.log("Гав-гав! 🐾");
//     };
// }
//
// let myDog = new Dog("Шарик", 3);
// console.log(myDog.name); // "Шарик"
// myDog.bark();            // "Гав-гав! 🐾"

// function Airplane(model, wings) {
//     this.model = model;
//     this.wings = wings;
//
//     this.fly = function() {
//         console.log("Самолет взлетел! ✈️");
//     };
// }
//
// let plane1 = new Airplane("Boeing", 2);
// let plane2 = new Airplane("Airbus", 2);
//
// plane1.fly(); // "Самолет взлетел! ✈️"
// console.log(plane2.model); // "Airbus"

//call и apply — «Одолжи инструмент для другой игрушки»

// Инструмент: покрасить игрушку в синий цвет
// function paint(color) {
//     this.color = color; // this — это игрушка, которую красим
// }
//
// let car = { color: "красная" };
// let plane = { color: "белый" };
//
// // Используем paint для car через call
// paint.call(car, "синяя");
// console.log(car.color); // "синяя"
//
// // Используем paint для plane через apply (аргументы передаются массивом)
// paint.apply(plane, ["зеленый"]);
// console.log(plane.color); // "зеленый"

//Декораторы — «Наклейка с новыми возможностями»

// Исходная функция: робот говорит "Привет"
// function robotGreet() {
//     console.log("Привет!");
// }
//
// // Декоратор: считает, сколько раз вызвали функцию
// function countCalls(func) {
//     let count = 0;
//
//     // Возвращаем новую функцию-обертку
//     return function() {
//         count++;
//         console.log(`Функция вызвана ${count} раз`);
//         return func(); // Вызываем исходную функцию
//     };
// }
//
// // Создаем улучшенного робота
// const decoratedRobot = countCalls(robotGreet);
//
// decoratedRobot(); // "Функция вызвана 1 раз", затем "Привет!"
// decoratedRobot(); // "Функция вызвана 2 раз", затем "Привет!"

// Декоратор для проверки пароля
// function checkPassword(func, password) {
//     return function() {
//         const userInput = prompt("Введите пароль:");
//         if (userInput === password) {
//             func(); // Вызываем исходную функцию, если пароль верный
//         } else {
//             console.log("Доступ запрещен!");
//         }
//     };
// }
//
// // Улучшаем робота
// const secureRobot = checkPassword(robotGreet, "123");
//
// secureRobot(); // Сначала спросит пароль. Если ввести "123", скажет "Привет!"

//Прототип и наследование

// Прототип (базовая игрушка)
// const spiderRobot = {
//     walk: function() { console.log("Иду как паук! 🕷️") },
//     glow: function() { console.log("Глаза светятся! ✨") }
// };
//
// // Новая игрушка наследует прототип
// const superSpider = Object.create(spiderRobot);
// superSpider.shootWeb = function() { console.log("Пиу-у-у! 🕸️") };
//
// // Проверим, что умеет супер-робот:
// superSpider.walk(); // "Иду как паук! 🕷️" (унаследовано)
// superSpider.shootWeb(); // "Пиу-у-у! 🕸️" (свое свойство)

//Цепочка прототипов

// Прототип 1: Животное
// const animal = { eat: true };
//
// // Прототип 2: Кот (наследует животное)
// const cat = Object.create(animal);
// cat.meow = function() { console.log("Мяу! 😺") };
//
// // Котенок (наследует кота)
// const kitten = Object.create(cat);
// kitten.play = function() { console.log("Ловлю мышку! 🐭") };
//
// // Что умеет котенок?
// kitten.play(); // "Ловлю мышку! 🐭" (свое)
// kitten.meow(); // "Мяу! 😺" (от кота)
// console.log(kitten.eat); // true (от животного)

//Конструкторы и prototype

// Формочка для создания собак
function Dog(name) {
    this.name = name;
}

// Все собаки умеют лаять (через prototype)
Dog.prototype.bark = function() {
    console.log(`${this.name} говорит: Гав-гав! 🐶`);
};

// Создаем собаку
const myDog = new Dog("Бобик");
myDog.bark(); // "Бобик говорит: Гав-гав! 🐶"