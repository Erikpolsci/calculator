
const number = document.getElementById("btn-number");
const display = document.getElementById("display");
const result = document.getElementById("btn-equal");
const clear = document.getElementById("btn-clear");
const previousText = document.getElementById("previous-operation");
const currentText = document.getElementById("current-operation");


const buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
  button.addEventListener("click", (event) => {
   switch(event.target.innerText){
    case "AC":
          display.innerText = '';
          break;

    case "DEL":
          display.innerText = display.innerText.slice(0, -1);
          break;

    case "=":
          display.innerText = eval(display.innerText)
          break;


    default:
      display.innerText += event.target.innerText
   }

  })  
})

const operators = Array.from(document.getElementById(
  "btn-multiply", "btn-plus", "btn-minus",
   "btn-dot", 
 ));



display.addEventListener('keydown', (event) => {
 display.innerText =  event.key 
  
  
  //display.innerText = event.innerText
})

