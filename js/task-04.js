const decreaseBtn = document.querySelector('[data-action="decrement"]');
const increaseBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

let couterValue = 0;

decreaseBtn.addEventListener("click", () => {
  couterValue -= 1;
  updateCounterValue();
});

increaseBtn.addEventListener("click", () => {
  couterValue += 1;
  updateCounterValue();
});

function updateCounterValue() {
  valueSpan.textContent = couterValue;
}
