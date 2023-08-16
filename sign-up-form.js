const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');

inputs.forEach(input => {
    input.addEventListener("input", event => {
        input = event.target
        if (input.validity.valid) {
            input.classList.add('valid');
            input.classList.remove('invalid');
        } else {
            input.classList.add('invalid');
            input.classList.remove('valid');
        }
    });
});

confirmPassword.addEventListener("input", (e) => {
    e.preventDefault();
    if (confirmPassword.value != password.value) {
        confirmPassword.setCustomValidity("Passwords should match!");
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (password.value == confirmPassword.value) {
        console.log('Success');
    } else {
        console.log('No Match');
    }
});


