document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildToDo(e.target.new_task.value, e.target.task_priority.value)
    form.reset()
  })

  function buildToDo(todo, selection) {
    let myTask = document.createElement('li')
    let completeTask = document.createElement('button')
    completeTask.addEventListener('click', handleDelete)
    completeTask.textContent = 'Done!'
    myTask.textContent = `${todo} is ${selection} priority `
    myTask.appendChild(completeTask)
    console.log(myTask)
    if (selection === 'high'){
      myTask.style.color = 'red'
    } else if (selection === 'medium'){
      myTask.style.color = 'orange'
    } else {myTask.style.color = 'green'}
    document.querySelector('#tasks').appendChild(myTask)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

})
