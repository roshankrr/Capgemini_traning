let nums = document.querySelectorAll(".num");
let equal = document.querySelector(".eval");
let reset = document.querySelector(".reset");
let inp = document.querySelector(".inp");

nums.forEach((num) => {
  num.addEventListener("click", () => {
    inp.innerText += num.innerText;
  });
});
reset.addEventListener("click", () => {
  inp.innerText = 0;
});

equal.addEventListener("click", () => {
  inp.innerText = eval(inp.innerText.replace(/\b0+(?=\d)/g, ""));
});
