let conunterValue = 0;

const buttonDecrement = document.querySelector(
  `button[data-action = "decrement"]`
);
const subtractValue = () => {
  conunterValue--;
  document.getElementById("value").innerHTML = `${conunterValue}`;
};
buttonDecrement.addEventListener("click", subtractValue);

const buttonIncrement = document.querySelector(
  `button[data-action = "increment"]`
);
const addValue = () => {
  conunterValue++;
  document.getElementById("value").innerHTML = `${conunterValue}`;
};
buttonIncrement.addEventListener("click", addValue);
