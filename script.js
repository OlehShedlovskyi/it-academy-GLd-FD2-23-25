document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Добавление новой задачи
    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (taskInput.value.trim() === '') return; // Проверка на пустой ввод
        addTask(taskInput.value);
        taskInput.value = ''; // Очистка поля ввода
    });

    // Обработчик для списка (делегирование событий)
    taskList.addEventListener('click', function(e) {
        const target = e.target;

        // Удаление задачи
        if (target.classList.contains('delete')) {
            target.parentElement.remove();
        }
        // Отметка выполнения
        else if (target.tagName === 'SPAN') {
            target.parentElement.classList.toggle('completed');
        }
        // Редактирование задачи
        else if (target.classList.contains('edit')) {
            const li = target.parentElement;
            const span = li.querySelector('span');
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;

            li.replaceChild(input, span);
            input.focus();

            // Сохранение изменений при потере фокуса или нажатии Enter
            input.addEventListener('blur', function() {
                span.textContent = input.value;
                li.replaceChild(span, input);
            });

            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    span.textContent = input.value;
                    li.replaceChild(span, input);
                }
            });
        }
    });
});

// Создание элемента задачи
function addTask(text) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${text}</span>
        <button class="delete">Удалить</button>
        <button class="edit">Редактировать</button>
    `;
    document.getElementById('taskList').appendChild(li);
}