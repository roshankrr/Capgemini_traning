let inp = document.querySelector("input");
let btn = document.querySelector("button");
let task = document.querySelector(".tasks");
let spn = document.querySelectorAll("span");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    return;
  }
  let div = document.createElement("div");
  let rem = document.createElement("span");
  rem.textContent = "X";
  rem.style.backgroundColor = "red";
  rem.style.color = "white";
  rem.style.padding = "5px";
  rem.style.margin = "5px";
  rem.style.borderRadius = "5px";
  rem.style.cursor = "pointer";
  rem.addEventListener("click", () => {
    rem.parentElement.remove();
  });
  div.textContent = inp.value;
  div.style.backgroundColor = "gray";
  div.style.color = "white";
  div.style.padding = "10px";
  div.style.margin = "10px";
  div.style.borderRadius = "10px";
  div.style.display = "flex";
  div.style.justifyContent = "space-between";
  task.appendChild(div);
  div.appendChild(rem);
  inp.value = "";
});
