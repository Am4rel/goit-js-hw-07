const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const nodeList = [];
ingredients.forEach((elem) => {
  let newNode = document.createElement("li");
  newNode.textContent = elem;
  nodeList.push(newNode);
});
document.getElementById("ingredients").append(...nodeList);