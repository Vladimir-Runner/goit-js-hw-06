// const textInput = document.querySelector("#name-input");
// const textOutput = document.querySelector("#name-output");

// textInput.addEventListener("input", updateInput);

// function updateInput(event) {
//   if (event.currentTarget.value.trim() === "") {
//     textOutput.textContent = "Anonymous";
//   } else {
//     textOutput.textContent = event.currentTarget.value;
//   }
// }

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onChangeInput);

function onChangeInput(event) {
  if (event.currentTarget.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = event.currentTarget.value;
  }
}
