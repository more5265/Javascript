window.onload = function(){
const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addButton');
const toDoList = document.getElementById('List');

addBtn.addEventListener('click', function(){
    const list = document.createElement('li');
    const todoValue = inputBox.value.trim();

    if(todoValue == ""){
    alert('할 일을 추가하세요.');
    return;
    }

    list.innerHTML = `
    ${todoValue}
    <button class="delete-btn">X</button>
    `;

    toDoList.appendChild(list);
    inputBox.value = "";

    const deleteBtn = list.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function(){
        toDoList.removeChild(list);
    });
});
}; 