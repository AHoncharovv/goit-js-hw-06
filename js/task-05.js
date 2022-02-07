

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (element) => {
    if (element.currentTarget.value.length > 0) {
        output.textContent = element.currentTarget.value;
    } else output.textContent ="Anonymous";

});

