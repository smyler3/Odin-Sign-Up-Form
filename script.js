const MIN_PASSWORD_LENGTH = 8;

// Initialise all functions related to password setup
function setupPasswordFunctionality() {
    setPasswordMinLength();
    setupPasswordTooltip();
}

// Initialise the required minimum password length
function setPasswordMinLength() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#cpassword');

    password.setAttribute('minlength', MIN_PASSWORD_LENGTH);
    passwordConfirm.setAttribute('minlength', MIN_PASSWORD_LENGTH);
}

// Create password tooltips for each password field
function setupPasswordTooltip() {
    const passFields = document.querySelectorAll('.password-field');

    for (let i = 0; i < passFields.length; i++) {
        console.log(passFields[i]);
        // Creating password popup tooltip
        const popup = document.createElement('div');
        popup.classList.add('password-tooltip');
        popup.textContent = 'Password must have at least ' + MIN_PASSWORD_LENGTH + ' characters';
        passFields[i].appendChild(popup);

        // Setting min-length
        passFields[i]
    }
    console.log(passFields);

}

function createClickEvents() {
    // Creating form submission button
    const submitBtn = document.querySelector('.sign-up-btn');
    submitBtn.addEventListener('click', checkPasswordsmatch);
}

// Checks that the password and confirm password fields match
function checkPasswordsmatch() {
    const password = document.querySelector('#password').value;
    const passwordConfirm = document.querySelector('#cpassword').value;

    console.log(password);
    console.log(passwordConfirm);

    if (password === passwordConfirm) {
        console.log(true);
        return true;
    }
    console.log(false);
    return false;
}

createClickEvents();
setupPasswordFunctionality();