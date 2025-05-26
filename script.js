const passwordInput = document.getElementById('user_password')
const confirmPasswordInput = document.getElementById('confirm_password')

// checks for password strength
function validatePasswordStrength() {
    const value = passwordInput.value;
    const isValid = /^(?=.*[!@#$%^&*])(?=.{8,})/.test(value);

    if (value == '') {
        passwordInput.classList.remove('is-valid', 'is-invalid')
    } else if (isValid) {
        passwordInput.classList.add('is-valid')
        passwordInput.classList.remove('is-invalid')
    } else {
        passwordInput.classList.add('is-invalid')
        passwordInput.classList.remove('is-valid')
    }
    validatePasswordMatch()
}

// checks for password match

function validatePasswordMatch() {
    const password = passwordInput.value
    const confirm = confirmPasswordInput.value

    if (confirm === '') {
        confirmPasswordInput.classList.remove('is-valid', 'is-invalid')
        return;
    }

    if (password === confirm) {
        confirmPasswordInput.classList.add('is-valid')
        confirmPasswordInput.classList.remove('is-invalid')
    } else {
        confirmPasswordInput.classList.add('is-invalid')
        confirmPasswordInput.classList.remove('is-valid');
        }
}

passwordInput.addEventListener('input', validatePasswordStrength);
confirmPasswordInput.addEventListener('input', validatePasswordMatch);
