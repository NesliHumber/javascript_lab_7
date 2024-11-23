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