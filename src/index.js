import "./styles.css";

let form = document.querySelector(".form__container");
let username = document.querySelector(".form__username");
let password = document.querySelector(".form__password");

form.addEventListener("submit", checkForm);

function checkForm(e) {
  e.preventDefault();

  let usernameValue = username.value.trim();
  let passwordValue = password.value.trim();

  if (usernameValue === "") {
    showError(username, "Adja meg a felhasználónevet!");
  } else {
    showSuccess(username);
  }

  if (passwordValue === "") {
    showError(password, "Adja meg a jelszót!");
  } else {
    showSuccess(password);
  }
}

function showError(input, errorMessage) {
  let formGroup = input.parentElement;
  formGroup.classList.add("form__error");
  let message = formGroup.querySelector(".form__message");
  message.innerText = errorMessage;
}

function showSuccess(input) {
  let formGroup = input.parentElement;
  formGroup.classList.remove("form__error");
  formGroup.classList.add("form__success");
}
