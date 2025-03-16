// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     }
//     getThis () {
//         return this;
//     }
// }
//
//
// console.log(obj.sayHello());
// console.log(this));

// "use strict"; // Включаем строгий режим
// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     },
//     getThis() { // Добавлена запятая между методами
//         return this;
//     }
// };
//
// console.log(obj.sayHello()); // Вывод: Hello my name is John.
// console.log(window === this); // Проверка, равен ли this объекту window

// "use strict"; // Включаем строгий режим
// const obj = {
//      name: "John",
//      sayHello() {
//          return `Hello my name is ${this.name}.`;
//      },
//      getThis() { // Добавлена запятая между методами
//          return this;
//      }
//  };
//
// obj.getThis().secondName = 'Smith';
// console.log(obj)


// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     },
//     getThis() { // Добавлена запятая между методами
//         return this;
//     }
// };
//
// obj2.sayHello = obj.sayHello;
//
// obj2.sayHello();
//
//setTimeout(obj.sayHello, 1000);

// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     },
//     getThis() {
//         return this;
//     }
// };
//
// // Создаем объект obj2
// const obj2 = {
//     name: "Alice" // Добавляем свойство name, чтобы метод sayHello работал корректно
// };
//
// // Присваиваем метод sayHello из obj в obj2
// obj2.sayHello = obj.sayHello;
//
// // Вызываем метод sayHello на obj2
// console.log(obj2.sayHello()); // Вывод: Hello my name is Alice.


// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     },
//     getThis() {
//         return this;
//     }
// };
//
// setTimeout(() => {
//     obj.sayHello();
// }, 1000);
//
// setTimeout(obj.sayHello, 100);
// // this.callback.callAfter(timeout)

// const obj = {
//     name: "John",
//     sayHello() {
//         return `Hello my name is ${this.name}.`;
//     },
//     getThis() {
//         return this;
//     }
// };
//
// obj.sayHello.call({
//     name: 'Swith'
// }, 'Hello my name is');

// const CBWithContext = obj.sayHello.bind(obj);
//
// setTimeout(CBWithContext, 1000);

// const obj = {
//     name: "John",
//     sayHello(greeting = 'Hello') { // Добавляем параметр greeting
//         return `${greeting}, my name is ${this.name}.`;
//     },
//     getThis() {
//         return this;
//     }
// };
//
// // Используем call с дополнительным аргументом
// const result = obj.sayHello.call({ name: 'Swith' }, 'Hi');
// console.log(result); // Вывод: Hi, my name is Swith.

// const obj = {
//     name: "John",
//     sayHello(greeting = 'Hello') { // Добавляем параметр greeting
//         return `${greeting}, my name is ${this.name}.`;
//     },
//     getThis() {
//         return this;
//     }
// };
//
// (() => {
//     console.log('test')
// })()

// const arr = new Arrey(10)
//
// console.log(arr);

// function User (name, age) {
// //this = {}
//     this.name = name;
//     this.age = age;
// }
//
// connsole.log(new User('Stan', 20))
//
// const makeUser = (name, age) => {
//     const user = {};
//
//     user.name = name;
//     user.age = age;
//
//     return user;
// }
//
// console.log(makeUser('John, 29'))

// function User (name, age) {
//     if(!new.target) return new User(name, age)
//     this.name = name;
//     this.age = age;
// }
//
// console.log(User('Stan', 20));
//
// const makeUser = (name, age) => {
//     const user = {};
//
//     user.name = name;
//     user.age = age;
//
//     return user;
// }
//
// console.log(makeUser('John, 29'))

// function Person () {
//
// }
//
// {
//     name: '',
//         age: '',
//     sayHello() //My name is ...
// }
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//
//     this.sayHello = function () {
//         return `My name is ${this.name}.`;
//     };
// }
//
// const person = new Person('John', 30);
// console.log(person.sayHello()); // Вывод: My name is John.

// const person = {
//     name: 'John',
//     age: 30,
//     sayHello() {
//         return `My name is ${this.name}.`;
//     }
// };
//
// console.log(person.sayHello()); // Вывод: My name is John.

// const obj = {
//     name: "John",
//     age: 32,
// }
//
// Object.defineProperties(obj, {
//     value: 'Smith',
//     writable: false,
//     enumerable: true,
//     configurable: false
// })
//
// delete obj.secondName;
//
// for(key in obj) {
//     console.log(key);
// }

const obj = {
    name: "John",
    secondName: 'Smith',
    get fullName() {
        return ${this.name} ${this.secondName}`;`
    },
    set fullName(fullName) {
        const [name, secondName] = fullName.split(' ');

        if(!name || !secondName) throm new Erroe('wrong valid full name');

        this.name = name;
        this.secondName = secondName;
    }
}

obj.secondName = 'Test 132225';

console.log(obj.fullName)