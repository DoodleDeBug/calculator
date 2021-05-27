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
let index;
let firstVal;
let nextVal;

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
nums.forEach((num) => num.addEventListener("click", checkDisplay));
operators.forEach((op) => op.addEventListener("click", DisplayVal));
operators.forEach((op) => op.addEventListener("click", Calc));
operators.forEach((op) => op.addEventListener("click", checkDisplay));
clear.addEventListener("click", Clear);
del.addEventListener("click", Delete);
equal.addEventListener("click", Calc2);
point.addEventListener("click", DisplayVal);

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

  if (calculation.includes(".") && calculation.length > 4) {
    firstVal = calculation.slice(0, index).join("");
    point.removeEventListener("click", DisplayVal);
    console.log(firstVal);
    nextVal = calculation.slice(index + 1, calculation.length - 1).join("");
    screen.innerText = Operate(action, firstVal, nextVal);
    DisplayVal(e);
  }

  // function isTwoOperators() {
  //   if (
  //     (calculation.includes("+") ||
  //       calculation.includes("−") ||
  //       calculation.includes("÷") ||
  //       calculation.includes("×")) &&
  //     (calculation.includes("+") ||
  //       calculation.includes("−") ||
  //       calculation.includes("÷") ||
  //       calculation.includes("×"))
  //   ) {
  //     return true;
  //   }
  // }
  // console.log(isTwoOperators == true);

  // console.log(index);

  if (calculation.length > 3 && !calculation.includes(".")) {
    firstVal = calculation.slice(0, index).join("");
    nextVal = calculation.slice(index + 1, calculation.length - 1).join("");
    screen.innerText = Operate(action, firstVal, nextVal);
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

function checkDisplay() {
  if (Array.from(display).length > 12) {
    nums.forEach((num) => num.removeEventListener("click", DisplayVal));
    // operators.forEach((op) => op.removeEventListener("click", DisplayVal));
    // operators.forEach((op) => op.removeEventListener("click", Calc));
  }
}
// when press an operator first time, save display as val1, when press equal, if val1 exists, then save as val2, and calc; if press operator second time, update val1 to equal calc of prev val1 and display....
