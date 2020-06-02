// console.log('Yo see me in console');
// // this is a comment
// /*
// longer
// comments
// */
// const a = 3;
// let b = a - 2;
// const what = "Sujong";
// console.log(b, a);
// console.log(what);
// const bool = true;
// const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// //camel case
// console.log(daysOfWeek[0]);

// const sujongInfo = {name: "Sujong", age: "27", language: ["JavaScript", "C++"]};
// console.log(sujongInfo.language);
// sujongInfo.language = "Python";
// console.log(sujongInfo.language);

// console.log(sujongInfo, console);

// function sayHello(name){
//     console.log("Hello!", name);
// }

// sayHello("Sujong");

// function sayHello(name, age){
//     console.log(`Hello ${name}! you are ${age} years old`);
// }

// sayHello("Sujong", 27)

// function sayHello(name, age){
//     return `Hello ${name}! you are ${age} years old`;
// }

// const greetSujong = sayHello("Sujong", 27);

// console.log(greetSujong);

// const calculator = {
//     plus: function(a, b){
//         return a + b;
//     }
// }

// const plus = calculator.plus(5, 3);
// console.log(plus);

// const title = document.getElementById("title");
// console.log(title); //DOM: document object module
// title.innerHTML = "Hi! I'm from JavaScript!";
// console.dir(title)
// title.style.color = 'red'

// const title = document.getElementById("title");

// function handleResize(event){
//     console.log(event);
//     console.log("I have been resized");
// }
// document.title = "I own you."; //changes the name of the tab

// window.addEventListener("resize", handleResize); // calls handleResize when it's called even without inputs
// // window.addEventListener("resize", handleResize()); // calls handleResize function directly

// const title = document.getElementById("title");

// function handleClick(){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick)

// if (10 === 5){
//     console.log("hi"); /// note that the equal sign is 3 times repeated
// } else if ('10' === 10 && '10' === '10'){
//     console.log("ho");
// } else if ('10' === 10 || '10' === '10'){
//     console.log("he");
// } else{
//     console.log("ha");
// }

// const age = prompt("How old are you?");
// console.log(age);

// const title = document.querySelector("#title");

// const BASE_COLOR = "white";
// const OTHER_COLOR = "blue";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);
// }

// init();

// function handleOffline(){
//     console.log("See you later!");
// }

// function handleOnline(){
//     console.log("Welcome!");
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline); // checks online/offline status

// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const currentClass = title.className;
//     if(currentClass !== CLICKED_CLASS){
//         title.className = CLICKED_CLASS;
//     } else{
//         title.className = "";
//     }
// }
// function init(){
//     title.addEventListener("click", handleClick);
// }

// init();

// const title = document.querySelector("#title");
// const CLICKED_CLASS = "clicked";

// function handleClick(){
//     const hasClass = title.classList.contains(CLICKED_CLASS);
//     if(!hasClass){
//         title.classList.add(CLICKED_CLASS);
//     } else{
//         title.classList.remove(CLICKED_CLASS);
//     }
// }
// function init(){
//     title.addEventListener("click", handleClick);
// }

// init(); // not perfectly understood

// same code below
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("click", handleClick);
}

init(); 

