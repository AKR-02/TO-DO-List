let tasks = []

        function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();
            if (taskText !== ''){
                tasks.push(taskText);
                displaytasks();
                taskInput.value = ''
            }
        }
        function displaytasks(){
            const taskList = document.getElementById('taskList');
            taskList.innerHTML = ''
            tasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = task;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = function() {
                    tasks.splice(index, 1);
                    displaytasks();
                }
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.onclick = function() {
                    const newTask = prompt("Edit task:", task);
                    if (newTask !== null && newTask.trim() !== '') {
                        tasks[index] = newTask.trim();
                        displaytasks();
                    }
                }
                li.appendChild(editButton);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
            })
        }