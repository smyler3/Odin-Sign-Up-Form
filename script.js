const MIN_PASSWORD_LENGTH = 8;

/* 
 *------------------------------------------------------------------------------------------------
 * Functions for initialising password information
 *------------------------------------------------------------------------------------------------
 */

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

/* 
 *------------------------------------------------------------------------------------------------
 * Functions for checking password input
 *------------------------------------------------------------------------------------------------
 */

 function validateForm() {
    const password = document.querySelector('#password');
    const passwordConfirm = document.querySelector('#cpassword');

    return (checkPasswordsmatch(password, passwordConfirm) && checkPasswordLength(password, passwordConfirm));
}

// Checks that the password and confirm password fields match
function checkPasswordsmatch(password, passwordConfirm) {
    const passwordField = document.querySelector('#password-field');

    console.log(password.value);
    console.log(passwordConfirm.value);

    if (password.value === passwordConfirm.value) {
        console.log(true);
        removeVisualPasswordError(password, passwordConfirm, passwordField);
        removePasswordTooltip();
        return true;
    }
    console.log(false);
    setVisualPasswordError(password, passwordConfirm, passwordField);
    return false;
}

// Checks that the password fields are above the minimum length
function checkPasswordLength(password, passwordConfirm) {
    return (password.length >= MIN_PASSWORD_LENGTH && passwordConfirm.length >= MIN_PASSWORD_LENGTH); 
}

/* 
 *------------------------------------------------------------------------------------------------
 * Functions for altering password visuals
 *------------------------------------------------------------------------------------------------
 */

// Visually indicate to user passwords don't match
function setVisualPasswordError(password, passwordConfirm, passwordField) {
    passwordField.classList.add('input-error');
    password.classList.add('input-error');
    passwordConfirm.classList.add('input-error');
}

// Visually indicate to user passwords don't match
function removeVisualPasswordError(password, passwordConfirm, passwordField) {
    passwordField.classList.remove('input-error');
    password.classList.remove('input-error');
    passwordConfirm.classList.remove('input-error');
}

/* 
 *------------------------------------------------------------------------------------------------
 * Main
 *------------------------------------------------------------------------------------------------
 */

setupPasswordFunctionality();