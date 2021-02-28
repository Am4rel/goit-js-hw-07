const inputBox = document.getElementById("name-input");
const spanOutput = document.getElementById("name-output");

inputBox.addEventListener("input", (event) => {
  let name = event.currentTarget.value;
  if (name !== "") {
    spanOutput.textContent = name;
  } else {
    spanOutput.textContent = "незнакомец";
  }
});