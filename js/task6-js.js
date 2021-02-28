const inputBox = document.getElementById("validation-input");
    inputBox.addEventListener("focusout", (event) => {
      const inputLength = event.currentTarget.value.length;
      const validInputLength = parseInt(inputBox.getAttribute("data-length"));

      if (inputLength !== validInputLength) {
        inputBox.classList.add("invalid");
        inputBox.classList.remove("valid");
      } else {
        inputBox.classList.add("valid");
        inputBox.classList.remove("invalid");
      }
    });