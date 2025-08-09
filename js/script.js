document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('task-list');

    addBtn.addEventListener('click', function() {
        const taskText = taskInput.value;
        const taskDate = dateInput.value;

        if (taskText === '') {
            alert('Tugas tidak boleh kosong!');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task-item';

        li.innerHTML = `
            <span class="task-text">${taskText} (${taskDate})</span>
            <button class="delete-btn">Hapus</button>
        `;

        taskList.appendChild(li);

        taskInput.value = '';
        dateInput.value = '';
    });

    taskList.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.parentElement;
            taskList.removeChild(listItem);
        }
    });
});