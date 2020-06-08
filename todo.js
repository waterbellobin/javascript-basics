const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LOCAL = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LOCAL, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    deleteButton.innerText = "X";
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos(); // js takes everything in the local storage as strings
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = ""; // clear input
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LOCAL);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        }); // function inside an array
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();