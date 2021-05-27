///basic calc functions

function Add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function Subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function Multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function Divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function Operate(action, a, b) {
  return action(a, b);
}

//declare variables
let display = "";
let action;

//other functions
const Round = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d); // borrowed this from someone else :)

updateDisplayVal = () => (display = screen.innerText);

function checkDisplay() {
  Array.from(display).length > 11
    ? nums.forEach((num) => num.removeEventListener("click", DisplayVal))
    : null;
}

function checkPoint() {
  Array.from(display).includes(".")
    ? point.removeEventListener("click", DisplayVal)
    : null;
}

// query selectors
const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const equal = document.querySelector(".equal");
const point = document.querySelector(".decimal");

const screen = document.querySelector(".screen");

//add eventListeners
clear.addEventListener("click", Clear);
del.addEventListener("click", Delete);
equal.addEventListener("click", Calc2);
point.addEventListener("click", checkPoint);
point.addEventListener("click", DisplayVal);
nums.forEach((num) => num.addEventListener("click", checkDisplay));
nums.forEach((num) => num.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", checkDisplay));
operators.forEach((op) => op.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", Calc));

//Button functions
function Clear() {
  nums.forEach((num) => num.addEventListener("click", DisplayVal));
  point.addEventListener("click", DisplayVal);
  screen.innerText = "";
  updateDisplayVal();
  // console.log(display);
}

function Delete() {
  nums.forEach((num) => num.addEventListener("click", DisplayVal));
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
  let newCalc = calculation.slice(0, calculation.length - 1);
  console.log(newCalc);

  let index = 0;

  if (newCalc.includes("+")) {
    index = newCalc.indexOf("+");
    action = Add;
  } else if (newCalc.includes("-")) {
    index = newCalc.indexOf("-");
    action = Subtract;
  } else if (newCalc.includes("÷")) {
    index = newCalc.indexOf("÷");
    action = Divide;
  } else if (newCalc.includes("×")) {
    index = newCalc.indexOf("×");
    action = Multiply;
  }

  let firstVal;

  if (index != 0) {
    firstVal = calculation.slice(0, index).join("");
    let nextVal = calculation.slice(index + 1).join("");
    let answer = Round(Operate(action, firstVal, nextVal), 6);
    screen.innerText = answer;
    DisplayVal(e);
    // console.log("did something");
  }

  // console.log(firstVal);
}

function Calc2() {
  calculation = Array.from(display);
  // console.log("in calc2");
  // console.log(calculation);

  let index;

  if (calculation.includes("+")) {
    index = calculation.indexOf("+");
    action = Add;
  } else if (calculation.includes("-")) {
    index = calculation.indexOf("-");
    action = Subtract;
  } else if (calculation.includes("÷")) {
    index = calculation.indexOf("÷");
    action = Divide;
  } else if (calculation.includes("×")) {
    index = calculation.indexOf("×");
    action = Multiply;
  }
  let answer = Round(
    Operate(
      action,
      calculation.slice(0, index).join(""),
      calculation.slice(index + 1).join("")
    ),
    5
  );
  screen.innerText = answer;
}

// when press an operator first time, save display as val1, when press equal, if val1 exists, then save as val2, and calc; if press operator second time, update val1 to equal calc of prev val1 and display....
