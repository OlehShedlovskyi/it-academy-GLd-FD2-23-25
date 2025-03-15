// // let num = 4;
// //
// // if (num >= 0) {
// //     console.log(num)
// // }
//
// // let num = 4;
// //
// // while (num >= 0) {
// //     console.log(num)
// // }
// // это код будет выполняться до ошибки из...
//
// // let num = 4;
// //
// // while (num >= 0) {
// //     console.log(num)
// //     num -= 1 ;
// // }
//
// // let num = 4;
// //
// // do  {
// //     console.log(num)
// //     num -= 1 ;
// // } while (num <= 0) {}
//
// let arr = (1, 2, 3, 4, 5);
//
// arr.length = 3;
// let index = 0;
// while (index < arr.length) {
//      console.log(arr[index]);
//      index++;
// }
//

// let arr:number[] = (1, 2, 3, 4, 5);
//
// let index = 0;
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index]);
// }

// let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
//
// console.log(sum); // Выведет: 55

// Пример 1: Вывод суммы массива
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(sum); // Выведет: 55
//
// // Пример 2: Использование цикла while
// let num = 4;
// while (num >= 0) {
//     console.log(num); // Выведет: 4, 3, 2, 1, 0
//     num -= 1;
// }
//
// // Пример 3: Использование цикла for
// let arr2 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]); // Выведет: 1, 2, 3, 4, 5
// }

// const  pom = (a, b) => {
//     return a ^ b;
// }
//
// console.log(pom(a:2, b:3)); //8

// const pow = (a, b) => {
//     return a ** b;
// };
//
// console.log(pow(2, 3)); // Выведет: 8
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doSomething = ({ par1, par2, par3 }) => {
    console.log(par1, par2, par3);
};

doSomething({ par1: 1, par2: 2, par3: 3 }); // Выведет: 1 2 3