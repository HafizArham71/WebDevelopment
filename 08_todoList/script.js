let inputElem = document.getElementById('inputField');
let todoBtn = document.querySelector('.addtodoBtn');
let todoList = document.querySelector('.todoList');
let form = document.querySelector('form');

// Load and display stored todo items
let local = JSON.parse(localStorage.getItem('todoListitems')) || [];
let todoGetItems = () => {
    local.forEach(currElem => {
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('mainTodo');
        todoDiv.innerHTML = ` <li>${currElem}</li>   <button type="button" class="deleteBtn">Delete</button>`;
        todoList.append(todoDiv);
    });
};
todoGetItems();

// Handle input and add new todo items
let handleInput = () => {
    if (inputElem.value !== '' && !local.includes(inputElem.value)) {
        local.push(inputElem.value);
        localStorage.setItem('todoListitems', JSON.stringify(local));

        let todoDiv = document.createElement('div');
        todoDiv.classList.add('mainTodo');
        todoDiv.innerHTML = ` <li>${inputElem.value}</li>   <button type="button" class="deleteBtn">Delete</button>`;
        todoList.append(todoDiv);
    }
};

// Add todo item on button click
inputElem.addEventListener('change', () => {
    handleInput();
    inputElem.value = '';
});

// Remove todo item
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        let itemText = e.target.previousElementSibling.textContent;
        local = local.filter(item => item !== itemText); // Remove item from array
        localStorage.setItem('todoListitems', JSON.stringify(local)); // Update localStorage
        e.target.parentNode.remove(); // Remove item from DOM
    }
});
