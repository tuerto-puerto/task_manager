let tasks = [];

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            text: taskText,
            completed: false
        };

        tasks.push(task);
        taskInput.value = '';
        displayTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function showAll() {
    displayTasks();
}

function showActive() {
    const activeTasks = tasks.filter(task => !task.completed);
    displayTasks(activeTasks);
}

function showCompleted() {
    const completedTasks = tasks.filter(task => task.completed);
    displayTasks(completedTasks);
}

function displayTasks(taskList = tasks) {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));

        const taskText = document.createElement('span');
        taskText.innerText = task.text;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index));

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteButton);

        taskListContainer.appendChild(taskItem);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logout__Btn');

    logoutBtn.addEventListener('click', function () {
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });
});


