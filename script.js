// script.js
class Accordion {
    constructor(selector, options = {}) {
        // Настройки по умолчанию
        this.settings = {
            single: true,
            ...options
        };

        // Находим контейнер
        this.accordion = document.querySelector(selector);

        // Собираем все элементы аккордеона
        this.items = this.accordion.querySelectorAll('.accordion-item');

        // Инициализация
        this.init();
    }

    init() {
        // Добавляем обработчики кликов
        this.items.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => this.toggleItem(item));
        });
    }

    toggleItem(clickedItem) {
        // Закрываем другие элементы если включен режим single
        if (this.settings.single) {
            this.items.forEach(item => {
                if (item !== clickedItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                }
            });
        }

        // Переключаем класс active
        clickedItem.classList.toggle('active');
    }
}