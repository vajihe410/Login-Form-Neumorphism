const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const usernameMsg = document.querySelector(".username-status");
const passwordMsg = document.querySelector(".password-status");
const button = document.querySelector("button");
const buttonMsg = document.querySelector(".button-status");

button.addEventListener("click", logIn);

function logIn(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    usernameMsg.innerText = "";
    passwordMsg.innerText = "";

    const usernameRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
    const passwordRegex = /^[a-z0-9]{3,15}$/;

    let usernameValidation = usernameRegex.test(username);
    let passwordValidation = passwordRegex.test(password);

    if (!username) {
        usernameMsg.innerText = "Please enter a username";
    } else if (usernameValidation === false) {
        usernameMsg.innerText = "Please enter a valid username";
    }

    if (!password) {
        passwordMsg.innerText = "Please enter a password";
    } else if (passwordValidation === false) {
        passwordMsg.innerText = "Please enter a valid password";
    }

    if (usernameValidation && passwordValidation) {
        buttonMsg.innerText = "Success";
        buttonMsg.style.color = "rgb(64, 255, 64)";
    } else {
        buttonMsg.innerText = "Fail";
        buttonMsg.style.color = "rgb(253, 89, 89)";
    }
}
