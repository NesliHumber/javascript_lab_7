const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

hoverButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = 'Mouse is over the button';
});

hoverButton.addEventListener('mouseleave', () => {
    hoverMessage.textContent = 'Mouse left the button';
});

const keyInput = document.getElementById('keyInput');
const keyMessage = document.getElementById('keyMessage');

keyInput.addEventListener('keyup', (event) => {
    keyMessage.textContent = `Last key pressed: ${event.key}`;
});

const sampleForm = document.getElementById('sampleForm');
const formMessage = document.getElementById('formMessage');

sampleForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const message = document.getElementById('message').value;
    formMessage.textContent = `Form submitted! Name: ${firstName} ${lastName}, Message: ${message}`;
});

const focusInput = document.getElementById('focusInput');
const focusMessage = document.getElementById('focusMessage');

focusInput.addEventListener('focus', () => {
    focusMessage.textContent = 'Input field is focused';
});

focusInput.addEventListener('blur', () => {
    focusMessage.textContent = 'Input field lost focus';
});