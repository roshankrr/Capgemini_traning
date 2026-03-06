const num1Input = document.getElementById("num1") as HTMLInputElement;
const num2Input = document.getElementById("num2") as HTMLInputElement;
const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const resultDisplay = document.getElementById("result");

addBtn?.addEventListener("click", () => {
  const a = parseFloat(num1Input.value);
  const b = parseFloat(num2Input.value);
  const result = Arth.add(a, b);
  if (resultDisplay) resultDisplay.textContent = `Result: ${result}`;
});

subBtn?.addEventListener("click", () => {
  const a = parseFloat(num1Input.value);
  const b = parseFloat(num2Input.value);
  const result = Arth.sub(a, b);
  if (resultDisplay) resultDisplay.textContent = `Result: ${result}`;
});
