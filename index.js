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

// console.log(Add(3, 4));
// console.log(Subtract(10, 4));
// console.log(Multiply(3, 4));
// console.log(Divide(10, 2));

function Operate(action, a, b) {
  return action(a, b);
}

// console.log(Operate(Add, 4, 1));
// console.log(Operate(Divide, 4, 2));
// console.log(Operate(Multiply, 4, 3));
// console.log(Operate(Subtract, 4, 1));

const nums = document.querySelectorAll("num");
const operator = document.querySelectorAll("operator");
const clear = document.querySelector("clear");
const del = document.querySelector("del");
const equal = document.querySelector("equal");
const point = document.querySelector("decimal");
