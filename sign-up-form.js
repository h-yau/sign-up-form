const form = document.querySelector('form');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');


confirmPassword.addEventListener("input", (e) => {
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


