const form = document.querySelector('#addTask')
const taskText = document.querySelector('#taskText')
const list = document.querySelector('#taskList')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const newTask = document.createElement('li')
    const check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    const removeBtn = document.createElement('button')
    
    newTask.innerText = taskText.value
    removeBtn.innerText = 'X'
    newTask.appendChild(check)
    newTask.appendChild(removeBtn)
    list.appendChild(newTask)
    taskText.value = ''
})

list.addEventListener('click', function(e) {
    if (e.target.tagName === "BUTTON"){
        e.target.parentElement.remove()
    } else if (e.target.tagName === "INPUT"){
        e.target.parentElement.classList.toggle('strike')
    }
})




