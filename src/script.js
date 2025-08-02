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




// Js for clock
function updateClock(){
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let clock = document.getElementById('clock');
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
let dayAnim = lottie.loadAnimation({
  container: document.getElementById('day-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'rcs/Sunrise - Breathe in Breathe out.json' // replace with your downloaded Lottie JSON path
});

let nightAnim = lottie.loadAnimation({
  container: document.getElementById('night-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: 'rcs/Stars.json' // replace with your downloaded Lottie JSON path
});

function updateBackground() {
  let hours = new Date().getHours();
  if(hours >= 6 && hours < 18){
    document.getElementById('day-animation').style.display = 'block';
    document.getElementById('night-animation').style.display = 'none';
  } else {
    document.getElementById('day-animation').style.display = 'none';
    document.getElementById('night-animation').style.display = 'block';
  }
}
setInterval(updateClock, 1000);
setInterval(updateBackground, 1000);
updateBackground(); // Initial call to set the background immediately
updateClock(); // Initial call to set the clock immediately