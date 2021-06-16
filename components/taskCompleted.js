const buttonCompleted = () => {
    const buttonCompletedTask = document.createElement('button')
    buttonCompletedTask.innerText = 'Completar'

    buttonCompletedTask.addEventListener('click', completedTask)

    return buttonCompletedTask
}

const completedTask = (event) => {
    const button = event.target

    const contentButton = button.parentElement

    const underlineTask = contentButton.parentElement

    underlineTask.classList.toggle('done')

}

export default buttonCompleted