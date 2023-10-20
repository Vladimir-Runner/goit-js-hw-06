const text = document.querySelector("#text");
const fontSizeControl = document.querySelector("#font-size-control");

fontSizeControl.addEventListener("input", changeSize);

function changeSize() {
  text.style.fontSize = `${fontSizeControl.value}px`;
}
