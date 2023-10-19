const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

input.addEventListener("input", updateInput);

function updateInput(event) {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
