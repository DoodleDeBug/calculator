///basic calc functions

function Add(a, b) {
  return a + b;
}

function Subtract(a, b) {
  return a - b;
}

function Multiply(a, b) {
  return a * b;
}

function Divide(a, b) {
  return a / b;
}

function Operate(action, a, b) {
  return action(a, b);
}

console.log(Operate(Multiply, 4, 2));
//declare variables
let display = "";
let action = "";

//other functions
updateDisplayVal = () => (display = screen.innerText);

// query selectors
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const point = document.querySelector(".decimal");

const screen = document.querySelector(".screen");

//add eventListeners
nums.forEach((num) => num.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", DisplayVal));
clear.addEventListener("click", Clear);
del.addEventListener("click", Delete);
equal.addEventListener("click", Calc);

// function (e) {
//   // console.log(display.innerText);
//   // console.log(e.target.innerText);
//   screen.innerText += e.target.innerText;
// }

//Button functions
function Clear() {
  screen.innerText = "";
  updateDisplayVal();
  // console.log(display);
}

function Delete() {
  let val = Array.from(screen.innerText);
  // console.log(val);
  screen.innerText = val.slice(0, val.length - 1).join("");
  updateDisplayVal();
}

function DisplayVal(e) {
  screen.innerText += e.target.innerText;
  updateDisplayVal();
  console.log(display);
}

function Calc() {
  calculation = Array.from(display);

  switch (calculation[1]) {
    case "+":
      action = Add;
      break;
    case "−":
      action = Subtract;
      // screen.innerText = Operate(action, calculation[0], calculation[2]);
      break;
    case "÷":
      action = Divide;
      // screen.innerText = Operate(action, calculation[0], calculation[2]);
      break;
    case "×":
      action = Multiply;
      // screen.innerText = Operate(action, calculation[0], calculation[2]);
      break;
    default:
      console.log("default");
  }
  screen.innerText = Operate(action, calculation[0], calculation[2]);
}
