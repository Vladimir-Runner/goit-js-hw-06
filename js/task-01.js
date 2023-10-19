 const categoryEl = document.querySelectorAll("#categories .item");

console.log(`Number of categories: ${categoryEl.length}`);

categoryEl.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
