document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask)
});

const addTask = (e) => {
  e.preventDefault();
  // why doesn't e.target.new-task-description.value work??
  let taskDescription = {description: e.target[0].value};

  // create new list item for task
  let newTaskItem = document.createElement('li');
  // add text to the new list item
  newTaskItem.innerHTML = taskDescription.description;
  // get the ul where we want to put list item
  let taskList = document.querySelector('ul');
  // append new list item with info to the ul
  taskList.append(newTaskItem)
}