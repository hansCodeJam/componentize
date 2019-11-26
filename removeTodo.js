document.querySelector('.remove-todo').addEventListener('click', function() {
    const indexInput = document.querySelector('.index-input').value;
    removeValue(indexInput);
});