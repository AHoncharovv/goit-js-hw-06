let counterValue = 0;
const handleClickDecr = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const handleClickIncr = () => {
    counterValue += 1;
    value.textContent = counterValue;
};


const btnDcr = document.querySelector('button[data-action="decrement"]');
const btnIncr = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnDcr.addEventListener("click", handleClickDecr);
btnIncr.addEventListener("click", handleClickIncr);








