const printValue = value => { 
    const listItem = document.createElement('li');
    listItem.innerText = value;
    const list = document.querySelector('.todo-list')
    list.appendChild(listItem);
  }