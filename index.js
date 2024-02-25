const taskInput = document.getElementById('todo');

const todoArray = [];

function runTasks() {
    const taskList = document.getElementById('list');

    taskList.innerHTML = '';

    todoArray.forEach((task, index) => 
    {
        const taskElement = document.createElement("li");
        taskElement.classList.add('task-list');
        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskElement.appendChild(taskText);

        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.onclick = () => editTask(index);
        taskElement.appendChild(edit);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTask(index);
        taskElement.appendChild(deleteBtn);

        taskList.appendChild(taskElement);
    });
}

function addTodo() {
    const taskInput = document.getElementById('todo');
    const taskText = taskInput.value.trim();

    if (taskText){
        todoArray.push(taskText);
        taskInput.value = '';
        runTasks();
    }
}

function deleteTask(index) {
    todoArray.splice(index, 1);
    runTasks();
}


function editTask(index) {
    const textTask = prompt('What is the new task for today?', todoArray[index]);

    if (textTask !== null) {
        todoArray[index] = textTask.trim();
    }

    runTasks();
}

runTasks();