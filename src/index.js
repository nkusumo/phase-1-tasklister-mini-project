document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submitted');
  })
});

// function addTask(event) {
//   let taskDescription = event.target.new-task-description.value
//   let newTask = document.createElement('li');
//   newTask.textContent = taskDescription;
//   document.getElementById('tasks').append(newTask)
// }