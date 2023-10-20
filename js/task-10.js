function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const controlsDiv = document.querySelector("#controls");
const createrCube = controlsDiv.querySelector("[data-create]");
const destroyerCube = controlsDiv.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

createrCube.addEventListener("click", createCube);
destroyerCube.addEventListener("click", destroyCube);

function createCube() {
  const amount = +document.querySelector("input").value;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");
    boxesDiv.appendChild(box);
  }
}

function destroyCube() {
  boxesDiv.innerHTML = "";
}
