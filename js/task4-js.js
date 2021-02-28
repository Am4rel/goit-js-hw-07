const decrementBtn = document.querySelector(
  "button[data-action=decrement]"
);
const incrementBtn = document.querySelector(
  "button[data-action=increment]"
);
const spanValue = document.getElementById("value");

decrementBtn.addEventListener("click", () => {
  let counterValue = parseInt(spanValue.textContent);
  spanValue.textContent = counterValue - 1;
});

incrementBtn.addEventListener("click", () => {
  let counterValue = parseInt(spanValue.textContent);
  spanValue.textContent = counterValue + 1;
});