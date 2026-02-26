var main = document.querySelector("main");
let theme = 1;
var them = document.querySelector(".theme").addEventListener("click", () => {
  if (theme) {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    theme = 0;
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    theme = 1;
  }
});

let count = 0;
var counter = document.querySelector(".counter");
var plus = document.querySelector(".plus");
var minus = document.querySelector(".minus");
var reset = document.querySelector(".reset");

plus.addEventListener("click", () => {
  console.log(3);

  count++;
  counter.textContent = count;
});

minus.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

let a = [1, 2, 3];
let b = [...a];
b[1] = 4;
console.log(a, b);

let c = { 1: "ah", 2: { 3: "rah" } };
let d = JSON.parse(JSON.stringify(c));
d[2][3] = "mah";
console.log(c, d);

