document.addEventListener(`DOMContentLoaded`, () =>{
  const form = document.querySelector(`form`);
  form.addEventListener(`submit`, (e) =>{
    e.preventDefault();
    const input = document.querySelector("#new-task-description");
    addToDo(input.value);
    form.reset();
  })
})
function addToDo(todo){
  //console.log(todo);
  let li = document.createElement(`li`);
  li.textContent = `${todo}  `;
  let btn = document.createElement(`button`);
  btn.textContent = `x`;
  btn.addEventListener(`click`, deleteToDo)
  let tasks = document.getElementById(`tasks`);
  tasks.appendChild(li);
  li.appendChild(btn);
}

function deleteToDo(e){
  e.target.parentNode.remove();
}


