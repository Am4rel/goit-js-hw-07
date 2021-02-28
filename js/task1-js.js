const liItems = document
      .getElementById("categories")
      .getElementsByClassName("item");
    console.log(`В списке ${liItems.length} категории.`);

for (let x = 0; x < liItems.length; x += 1) {
    const elem = liItems.item(x);
    console.log(`Категория: ${elem.firstElementChild.textContent}`);
    console.log(
    `Количество элементов: ${elem.querySelectorAll("ul>li").length}`
    );
}