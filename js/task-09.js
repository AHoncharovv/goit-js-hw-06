const btn = document.querySelector(".change-color");
const colorRandom = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

btn.addEventListener("click", () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  colorRandom.textContent = random;
});