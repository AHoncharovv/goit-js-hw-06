const inputRng = document.querySelector("#font-size-control");
const text = document.querySelector("span");

inputRng.addEventListener("input", () => {
    text.style.fontSize = inputRng.value + "px";
});

