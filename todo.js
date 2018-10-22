
let list = [];

const addToList  =  () => {
    let newTask = document.getElementById('newTask');
    let todoList = document.getElementById('list');
    let item = document.createElement('li');


    // Add new task text to item

    item.innerText = newTask.value;

    // Add Item to list

    todoList.appendChild(item);
    list.push(newTask.value);
}

