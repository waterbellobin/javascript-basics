const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");
const USER_STORAGE = "currentUser",
    SHOWING_CLASS_NAME = "showing";

function saveName(text){
    localStorage.setItem(USER_STORAGE, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    //console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CLASS_NAME);
    greeting.classList.add(SHOWING_CLASS_NAME);
    greeting.innerText = `Hello ${text}`;
}

function askForName(){
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener("submit", handleSubmit);
}
function loadName(){
    const currentUser = localStorage.getItem(USER_STORAGE);
    if (currentUser === null){
        askForName();
    } else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();