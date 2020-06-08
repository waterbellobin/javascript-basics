const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL = 'toDos';

function paintToDo(text){
    console.log(text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // clear input
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LOCAL);
    if (toDos !== null){
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();