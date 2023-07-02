const slider = document.getElementById("font-size-control");
const output = document.getElementById("text");
slider.addEventListener("input", function () {
  const size = slider.value;
  output.style.fontSize = size + "px";
});
