// const user = {
//     name: 'John',
//     email: 'john@example.com',
// } // Objec()
//
// console.log(user.toString())

// const human = {
//     name: 'John',
//     age: 32,
//     sayHello() {
//         console.log('Hello my name is ${this.name}');
//     }
// }
//
// const user = {
//     email: 'john@example.com',
//     password: 'password',
// }
//
// user.__proto__ = human
//
// // console.log(user.toString())
// user.sayHello();

const Human = {
    name: 'John',
    age: 32,
}

function User(email, password) {
    this.email = email;
    this.password = password;
}

const user1 = new User('John@exemple.com', 'secretPasswords');

console.log(user1.__proto__ === User);