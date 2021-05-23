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

// query selectors
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const point = document.querySelector(".decimal");

const screen = document.querySelector(".screen");

//declare variables
let display = "";

//add eventListeners
nums.forEach((num) => num.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", DisplayVal));
clear.addEventListener("click", Clear);
del.addEventListener("click", Delete);

// function (e) {
//   // console.log(display.innerText);
//   // console.log(e.target.innerText);
//   screen.innerText += e.target.innerText;
// }

//Button functions
function Clear() {
  screen.innerText = "";
}

function Delete() {
  let val = Array.from(screen.innerText);
  // console.log(val);
  screen.innerText = val.slice(0, val.length - 1).join("");
}

function DisplayVal(e) {
  screen.innerText += e.target.innerText;
  display = screen.innerText;
  console.log(display);
}
