const removeValue = value => {
    const list = document.querySelector('.todo-list')
    list.removeChild(list.childNodes[value])
} 