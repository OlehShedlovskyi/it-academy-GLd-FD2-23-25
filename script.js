// function UserFn(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//
//     UserFn.prototype.sayHello = function () {
//         return "Hello" + this.name + "!";
//     }
// }
//
// class UserClass {
//     constructor(name, email, password) {
//         this.name = name;
//         this.email = email;
//         this.password = password;
//     }
//     sayHello() {
//         return "Hello " + this.name + "!";
//     }
// }
//
// const userFn = new UserFm(name, email, password);
// const userClass = new UserClass(name, email, password);
//
// console.log(userFn.sayHello());
// console.log(userClass.sayHello());

// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class User extends Human {
//     constructor(name, age, email, password) {this.email = email;
//         this.password = password;
//     }
//     sayHello() {
//         return "Hello" + this.name + " !";
//     }
// }
//
// const John = new Human('John', 22);
// const user = new User("John, 22, "email, "password");
// console.log(John)
// console.log(user)

class Book {
    constructor(title, author,) {
        this.title = title;
        this.author = author;
        this.ID = ID;
        this.isAvailable = true;
    }

    borrow() {
            this.isAvailable = false;
        }

    returnBook() {
        this.isAvailable = true; // Пометить как доступную
    }
}

class Library {
    constructor() {
        this.books = []; // Хранилище всех книг библиотеки
    }
