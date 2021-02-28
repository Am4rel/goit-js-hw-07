const mainDiv = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-action=render]");
const destroyBtn = document.querySelector("button[data-action=destroy]");
const inputField = document.querySelector("div#controls > input");

createBtn.addEventListener("click", (event) => {
  const divQuantity = parseInt(inputField.value);

  const allDivs = [];
  for (let x = 0; x < divQuantity; x += 1) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      `width: ${30 + x * 10}px; height: ${
        30 + x * 10
      }px; background-color: rgb(${Math.round(
        Math.random() * 255
      )},${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255
      )})`
    );
    allDivs.push(div);
  }

  mainDiv.append(...allDivs);
});

destroyBtn.addEventListener("click", () => {
  const childDivs = mainDiv.childNodes;
  for (let x = 0; x < childDivs.length; x += 1) {
    let child = childDivs[x];
    // console.log(child.getAttribute("style"))
    child.remove();
  }
});