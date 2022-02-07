const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const login = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (login === "" || password === "") {
        return alert("Все поля должны быть зполнены!");
    }

    console.log(`Login: ${login}, Password: ${password}`);
    event.currentTarget.reset();
};











