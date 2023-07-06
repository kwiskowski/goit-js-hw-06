function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = getRandomHexColor();

const colorButton = document.querySelector(".change-color");
colorButton.addEventListener("click", function onClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  const backgroundColor = document.querySelector(".color");
  backgroundColor.textContent = color;
});
