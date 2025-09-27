const eInput = document.getElementById('email');
const pInput = document.getElementById('password');
const submitButton = document.querySelector('button');
const eError = document.createElement('span');
const pError = document.createElement('span');
const form = document.getElementById('form');

eInput.after(eError);
pInput.after(pError);

function validateEmail() {
    const Evalue = eInput.value;
    if (Evalue.length > 3 && Evalue.includes('@') && Evalue.includes('.')) {
        eError.textContent = 'All good to go!';
        eError.style.color = 'green';
        eError.style.fontSize = '14px';
        return true;
    } else {
        eError.textContent = 'Make sure email is more than 3 characters and has "@" and "."';
        eError.style.color = 'red';
        eError.style.fontSize = '14px';
        return false;
    }
}

function validatePassword() {
    const Pvalue = pInput.value;
    if (Pvalue.length > 8) {
        pError.textContent = 'All good to go!';
        pError.style.color = 'green';
        pError.style.fontSize = '14px';
        return true;
    } else {
        pError.textContent = 'Make sure password is more than 8 characters.';
        pError.style.color = 'red';
        pError.style.fontSize = '14px';
        return false;
    }
}

eInput.addEventListener('input', updateSubmitButtonState);
pInput.addEventListener('input', updateSubmitButtonState);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const isEValid = validateEmail();
    const isPValid = validatePassword();

    if (!isEValid || !isPValid) {
        return;
    }

    const confirmed = confirm('Are you sure you want to submit the form?');
    if (confirmed) {
        alert('Successful signup!');
        eInput.value = '';
        pInput.value = '';
        eError.textContent = '';
        pError.textContent = '';
        submitButton.disabled = true;
    } else {
        eInput.value = '';
        pInput.value = '';
        eError.textContent = '';
        pError.textContent = '';
        submitButton.disabled = true;
    }
});

function updateSubmitButtonState() {
    const isEValid = validateEmail();
    const isPValid = validatePassword();
    submitButton.disabled = !(isEValid && isPValid);
}