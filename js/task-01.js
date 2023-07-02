const categoriesCount = document.querySelectorAll(".item");
console.log(`Number of categories ${categoriesCount.length}`);

categoriesCount.forEach((element) => {
  const elementCategory = element.querySelector("h2");
  const elementItem = element.querySelectorAll("li");
  console.log(`Category ${elementCategory.textContent}`);
  console.log(`Elements: ${elementItem.length}`);
});
