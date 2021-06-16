const buttonDeleted = () => {
    const buttonDeletedTask = document.createElement('button')
    buttonDeletedTask.innerText = 'Deletar'

    buttonDeletedTask.addEventListener('click', deletedTask)

    return buttonDeletedTask
}

const deletedTask = (event) => {
    const button = event.target

    const contentButton = button.parentElement
    const taskDeleted = contentButton.parentElement

    taskDeleted.remove()
}

export default buttonDeleted