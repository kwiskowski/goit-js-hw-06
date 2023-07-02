const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listWithID = document.querySelector(`#ingredients`);

const firstItem = document.createElement("li");
firstItem.textContent = ingredients[0];
firstItem.classList.add("item");

const secondItem = document.createElement("li");
secondItem.textContent = ingredients[1];
firstItem.classList.add("item");

const thirdItem = document.createElement("li");
thirdItem.textContent = ingredients[2];
firstItem.classList.add("item");

const fourthItem = document.createElement("li");
fourthItem.textContent = ingredients[3];
firstItem.classList.add("item");

const fifthItem = document.createElement("li");
fifthItem.textContent = ingredients[4];
firstItem.classList.add("item");

const sixtItem = document.createElement("li");
sixtItem.textContent = ingredients[5];
firstItem.classList.add("item");

listWithID.prepend(
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  sixtItem
);
