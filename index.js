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
let index;

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
  console.log(calculation);

  if (calculation.includes("+")) {
    index = calculation.indexOf("+");
    action = Add;
  } else if (calculation.includes("−")) {
    index = calculation.indexOf("−");
    action = Subtract;
  } else if (calculation.includes("÷")) {
    index = calculation.indexOf("÷");
    action = Divide;
  } else if (calculation.includes("×")) {
    index = calculation.indexOf("×");
    action = Multiply;
  }

  // console.log(index);

  screen.innerText = Operate(
    action,
    calculation.slice(0, index).join(""),
    calculation.slice(index + 1).join("")
  );
}
