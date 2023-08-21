const passwordField = document.querySelectorAll(".passwordField");
const passwordValue = document.getElementById("password");
const confirmPasswordValue = document.getElementById("confirm_password");
const errorMessage = document.querySelector(".error_message");

function checkPasswordMatch() {
    passwordField.forEach((element) => {
        element.addEventListener("input", () => {
            if (passwordValue.value !== confirmPasswordValue.value || passwordField.value === "" || confirmPasswordValue.value === "") {
                passwordValue.style.border = "2px solid rgb(255, 29, 29)";
                confirmPasswordValue.style.border = "2px solid rgb(255, 29, 29)";
                errorMessage.textContent = "Passwords do not match";
            } else {
                confirmPasswordValue.style.border = "2px solid rgb(54, 141, 255)";
                passwordValue.style.border = "2px solid rgb(54, 141, 255)";
                errorMessage.textContent = "";
            }
        })
    })
}
checkPasswordMatch();