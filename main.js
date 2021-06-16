import buttonCompleted from './components/taskCompleted.js'
import buttonDeleted from './components/taskDelete.js'

function createTask(event) {

    event.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const taskList = document.querySelector('[data-list]')

    const value = input.value

    const calendar = document.querySelector('[data-form-date]')
    const date = moment(calendar.value)
    const dateFormated = date.format('DD/MM/YYYY')

    const task = document.createElement('li')
    const content = `<p>${dateFormated} - ${value}</p>`

    task.innerHTML = content

    const contentButtons = document.createElement('div')
    contentButtons.classList.add('buttons')
    task.appendChild(contentButtons)

    contentButtons.appendChild(buttonCompleted())
    contentButtons.appendChild(buttonDeleted())
    taskList.appendChild(task)

    input.value = ''
}


const newTask = document.querySelector('[data-form-button]')
newTask.addEventListener('click', createTask)