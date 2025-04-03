<script>
    document.addEventListener('DOMContentLoaded', () => {
    // Делегирование событий для удаления задач
    document.querySelector('.task-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const taskItem = e.target.closest('.task-item');
            taskItem.remove();
        }
    });

    // Добавление новых задач
    const form = document.querySelector('.add-task-form');
    const input = document.querySelector('.task-input');

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (input.value.trim()) {
    const newTask = document.createElement('li');
    newTask.className = 'task-item';
    newTask.innerHTML = `
                        <span>${input.value.trim()}</span>
                        <button class="delete-btn">Удалить</button>
                    `;

    document.querySelector('.task-list').appendChild(newTask);
    input.value = '';
}
});
});
</script>