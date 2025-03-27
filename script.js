// // const  responce = []
// //
// // try {
// //     if(iresponse.length) throw
// //     //rendor bascket
// //
// // } catch (a)
// // }
//
//
// const response = []
//
// class BasketError extends Error {
//     constructor(message) {
//         super(message);
//         this.basket = true;
//     }
//
// }
//

// class MyDivisionError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MyDivisionError";
//     }
// }
//
// function divide(a, b) {
//     if (b === 0) {
//         throw new MyDivisionError("Нельзя делить на ноль!");
//     }
//     return a / b;
// }
//
// try {
//     const result = divide(10, 0);
//     console.log("Результат:", result);
// } catch (error) {
//     if (error instanceof MyDivisionError) {
//         console.log("Ошибка:", error.message);
//     } else {
//         console.log("Неизвестная ошибка:", error);
//     }
// }


// const data1 = Date.now();
// console.log(data1);
//
// const cb = () => {
//     console.log('done', Date.now() - data1);
// }
//
// setTimeout(cb, 1000)

// console.time('interval')
// const id = setInterval(() => {
//     count++;
//
//     console.timeEnd('interval')
//     if (count > 10) clearInterval(id)
// } 10000)

let count = 0; // Добавляем счетчик
console.time('interval');

const id = setInterval(() => {
    count++;

    // Измеряем время с момента последнего интервала
    console.timeLog('interval');

    if (count >= 10) { // Останавливаем после 10 итераций
        clearInterval(id);
        console.timeEnd('interval'); // Финализируем замер
    }
}, 1000); // Интервал 1 секунда (1000 мс)