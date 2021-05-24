///basic calc functions

function Add(a, b) {
  return parseInt(a) + parseInt(b);
}

function Subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function Multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function Divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function Operate(action, a, b) {
  return action(a, b);
}

//declare variables
let display = "";
let action;
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
operators.forEach((op) => op.addEventListener("click", Calc));
clear.addEventListener("click", Clear);
del.addEventListener("click", Delete);
equal.addEventListener("click", Calc2);

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
  // console.log(display);
}

function Calc(e) {
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
  if (calculation.length > 3) {
    screen.innerText = Operate(
      action,
      calculation.slice(0, index).join(""),
      calculation.slice(index + 1, calculation.length - 1).join("")
    );
    DisplayVal(e);
  }
}

function Calc2() {
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
