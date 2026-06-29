
window.onload = function() {

const taskInput = document.getElementById('taskInput');
const button = document.getElementById('button');
const taskList = document.getElementById('taskList');

loadTasks();

function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText !== ""){

        createTaskElement(taskText);

        saveTasks();

        taskInput.value = "";
    }

}

function createTaskElement(text){

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = text;

    // clicar para riscar tarefa
    span.addEventListener('click', function(){
        span.classList.toggle('completed');
        saveTasks();
    });

    const removeBtn = document.createElement('button');
    removeBtn.textContent = "X";
    removeBtn.classList.add('remove');

    removeBtn.addEventListener('click', function(){
        li.remove();
        saveTasks();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);

    taskList.appendChild(li);
}

function saveTasks(){

    const tasks = [];

    document.querySelectorAll('#taskList li span').forEach(task => {
        tasks.push({
            text: task.textContent,
            completed: task.classList.contains('completed')
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function loadTasks(){

    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    savedTasks.forEach(task => {

        createTaskElement(task.text);

        const lastTask = taskList.lastChild.querySelector('span');

        if(task.completed){
            lastTask.classList.add('completed');
        }

    });

}

taskInput.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        addTask();
    }
});

button.addEventListener('click', addTask);

}