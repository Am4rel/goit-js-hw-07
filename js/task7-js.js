const spanField = document.getElementById("text");
    const inputField = document.getElementById("font-size-control");

    inputField.addEventListener("input", (event) => {
      const fontSize = event.currentTarget.value;
      spanField.setAttribute("style", `font-size: ${fontSize}px`);
    });