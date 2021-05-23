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

const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const point = document.querySelector(".decimal");

const display = document.querySelector(".screen");
// console.log(display.innerHTML);

nums.forEach((num) => num.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", DisplayVal));

clear.addEventListener("click", Clear);

//functions

function Clear() {
  display.innerText = "";
}

function DisplayVal(e) {
  display.innerText += e.target.innerText;
}

// function (e) {
//   // console.log(display.innerText);
//   // console.log(e.target.innerText);
//   display.innerText += e.target.innerText;
// }
