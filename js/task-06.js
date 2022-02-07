const inputEl = document.querySelector("input");

inputEl.addEventListener('blur', onInputFunc);

function onInputFunc(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = event.currentTarget.dataset.length;

   event.currentTarget.classList.add('invalid');
  event.currentTarget.classList.remove('valid');

  if (Number(valueLength) === Number(requiredLength)) {
    event.currentTarget.classList.add('valid');
    event.currentTarget.classList.remove('invalid');
  }
};