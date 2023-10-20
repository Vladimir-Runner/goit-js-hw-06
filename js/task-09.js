const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector("body");

btn.addEventListener("click", changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor() {
  const colorClick = getRandomHexColor();
  color.textContent = colorClick;
  body.style.backgroundColor = colorClick;
}
