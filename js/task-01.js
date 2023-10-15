const categoryEl = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryEl.length}`);

let arrayElements = [];
categoryEl.forEach((elem) => {
  arrayElements.push(elem.children);
});

let arrTitles = [];
arrayElements.forEach((element) => {
  arrTitles.push(element[0].textContent);
});

let arrCountElem = [];
arrayElements.forEach((el) => {
  arrCountElem.push(el[1].children.length);
});

function makeDescription(category, counter) {
  for (let i = 0; i < arrTitles.length; i += 1) {
    console.log(`Category: ${arrTitles[i]}`);
    console.log(`Elements: ${arrCountElem[i]}`);
  }
}
makeDescription(arrTitles, arrCountElem);
