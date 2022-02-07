const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

const ingredientsTo = ingredients.map(element => {
  const itemEl = document.createElement("li");
  itemEl.textContent = element;
  itemEl.classList.add("item");

  return itemEl;
  }
  );

ingredientsEl.append(...ingredientsTo);