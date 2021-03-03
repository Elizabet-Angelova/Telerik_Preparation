const inputTodo = document.getElementById('inputToDo')
const inputDate = document.getElementById('inputDate')
const addBtn = document.getElementById('addBtn')
const toDoContainer = document.getElementById('toDoContainer')

addBtn.addEventListener('click', () => {
    let toDoValue = inputTodo.value
    let dateValue = inputDate.value

    if (!toDoValue || !dateValue) {
        alert('Please provide ToDo information!')
    } else {
        let newCheckbox = document.createElement('div')
        newCheckbox.className = 'col-md-2 col-sm-2 trys2'
        newCheckbox.innerHTML = '<input type="checkbox" id="checkbox">'
        let newToDoText = document.createElement('div')
        newToDoText.className = 'col-md-5 col-sm-5 trys2 todo-list'
        newToDoText.innerText = toDoValue
        let newDateText = document.createElement('div')
        newDateText.className = 'col-md-3 col-sm-3 trys2 todo-list'
        newDateText.innerText = dateValue
        let newTrash = document.createElement('div')
        newTrash.className = 'col-md-2 col-sm-2 trys2'
        newTrash.innerHTML = '<i id="trashIcon" class="far fa-trash-alt">'

        let newItem = document.createElement('div')
        newItem.className = 'row todo-item'
        newItem.appendChild(newCheckbox)
        newItem.appendChild(newToDoText)
        newItem.appendChild(newDateText)
        newItem.appendChild(newTrash)

        newItem.style.opacity = '0'
        toDoContainer.appendChild(newItem)
        document.getElementById('inputToDo').value = ''
        document.getElementById('inputDate').value = ''

        newTrash.addEventListener('click', () => {
            let parent = newTrash.parentElement
                parent.style.transition = 'opacity 0.4s ease-in' 
                parent.style.opacity = '0'
                setTimeout(function() {
                    toDoContainer.removeChild(parent)
                },600)
            
        })

        setTimeout(function(){ 
            newItem.style.transition = 'opacity 0.4s ease-in' 
            newItem.style.opacity = '1'
        }, 0);


    }
})