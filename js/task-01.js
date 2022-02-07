
const categoriesLengthEl = document.querySelectorAll(".item");
console.log('Number of categories ', categoriesLengthEl.length);

categoriesLengthEl.forEach(category => {
    console.log("Category: ", category.firstElementChild.textContent);
    console.log("Element: ", category.lastElementChild.children.length);
});

