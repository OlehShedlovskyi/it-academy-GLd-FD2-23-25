// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Наша волшебная функция копирования
    function deepCopy(obj) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item));
        }

        const newObj = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepCopy(obj[key]);
            }
        }
        return newObj;
    }

    // Наш сложный объект-пример
    const complexObject = {
        name: 'Test Object',
        age: 42,
        isActive: true,
        scores: [95, 88, 76, 100],
        address: {
            street: '123 Main St',
            city: 'Anytown',
            zip: '12345',
            geo: {
                lat: 40.7128,
                lng: -74.0060
            }
        }
    };

    // Делаем копию
    const copiedObject = deepCopy(complexObject);

    // Меняем копию, чтобы показать что оригинал не изменился
    copiedObject.name = 'Измененная копия';
    copiedObject.scores.push(999);
    copiedObject.address.geo.lat = 100.0000;

    // Показываем результаты на странице
    document.getElementById('original').textContent = JSON.stringify(complexObject, null, 2);
    document.getElementById('copy').textContent = JSON.stringify(copiedObject, null, 2);

    // Также выводим в консоль для проверки
    console.log('Оригинал:', complexObject);
    console.log('Копия:', copiedObject);
});