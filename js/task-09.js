function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector(".change-color");

colorButton.addEventListener("click", function onClick() {
  document.body.style.backgroundColor = getRandomHexColor();
  const backgroundColor = document.querySelector(".color");
  let colorCatcher = getRandomHexColor();
  backgroundColor.innerHTML = colorCatcher;
});

// proszę jeszcze wypisać kolor do html'a.
// można zapisywać otrzymany kolor po pierwszym wywołaniu
// do zmiennej i już korzystać ze zmiennej by nadać kolor dla body oraz wypisać go do html'a
