document.querySelector('.add-todo').addEventListener('click', function() {
    const userInput = document.querySelector('.todo-input').value;
    printValue(userInput);
});