// // Функция для имитации загрузки данных с сервера
// function fetchDataFromServer() {
//     return new Promise((resolve, reject) => {
//         // Имитируем задержку сети в 2 секунды
//         setTimeout(() => {
//             // Генерируем случайное число, чтобы имитировать успех или ошибку
//             const isSuccess = Math.random() > 0.3; // 70% chance of success
//
//             if (isSuccess) {
//                 // В случае успеха разрешаем промис с данными
//                 resolve({
//                     status: 'success',
//                     data: {
//                         id: 1,
//                         name: 'Пример данных с сервера',
//                         timestamp: new Date().toISOString()
//                     }
//                 });
//             } else {
//                 // В случае ошибки отклоняем промис
//                 reject(new Error('Ошибка загрузки данных: сервер не отвечает'));
//             }
//         }, 2000); // Задержка 2 секунды
//     });
// }
//
// // Использование функции с обработкой результата
// document.addEventListener('DOMContentLoaded', () => {
//     const resultContainer = document.createElement('div');
//     resultContainer.id = 'result';
//     document.body.appendChild(resultContainer);
//
//     // Выводим сообщение о начале загрузки
//     resultContainer.textContent = 'Загрузка данных...';
//
//     // Вызываем функцию и обрабатываем результат
//     fetchDataFromServer()
//         .then(data => {
//             // Обработка успешного результата
//             resultContainer.innerHTML = `
//         <h2>Данные успешно загружены</h2>
//         <pre>${JSON.stringify(data, null, 2)}</pre>
//       `;
//             resultContainer.style.color = 'green';
//         })
//         .catch(error => {
//             // Обработка ошибки
//             resultContainer.innerHTML = `
//         <h2>Произошла ошибка</h2>
//         <p>${error.message}</p>
//       `;
//             resultContainer.style.color = 'red';
//         });
// });