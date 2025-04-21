const todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    }
];

function renderTodos() {
    const pendingList = document.querySelector('#pending .items');
    const completedList = document.querySelector('#completed .items');
    const template = document.getElementById('todo-template');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    todos.forEach(todo => {
        const clone = template.content.cloneNode(true);
        const item = clone.querySelector('.todo-item');
        const title = clone.querySelector('.title');
        const checkbox = clone.querySelector('input');

        title.textContent = todo.title;
        checkbox.checked = todo.completed;
        item.dataset.id = todo.id;
        title.classList.toggle('text-decoration-line-through', todo.completed);

        // Drag handlers
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', todo.id);
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });

        // Распределение по колонкам
        (todo.completed ? completedList : pendingList).appendChild(clone);
    });
}

// Обработчики для колонок
document.querySelectorAll('.todo-list').forEach(list => {
    list.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    });

    list.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData('text/plain'));
        const todo = todos.find(t => t.id === id);

        if (todo) {
            todo.completed = !todo.completed;
            renderTodos();
        }
    });
});

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', renderTodos);