const form = document.querySelector('form');
const inputs = form.querySelectorAll('input, textarea');
const proceedButton = document.getElementById('proceedButton');
const anotherButton = document.querySelector('.another');

let check = () => {
    let valid = true;
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            valid = false;
        }
    });
    proceedButton.disabled = !valid;
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    proceedButton.textContent = 'Your message has been sent!';
    proceedButton.disabled = true;
    anotherButton.style.display = 'block';
});

inputs.forEach(input => {
    input.addEventListener('input', check);
});

anotherButton.addEventListener('click', () => {
    form.reset();
    proceedButton.textContent = 'Proceed';
    proceedButton.disabled = true;
    anotherButton.style.display = 'none';
});
