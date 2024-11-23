const hoverButton = document.getElementById('hoverButton');
const hoverMessage = document.getElementById('hoverMessage');

hoverButton.addEventListener('mouseenter', () => {
    hoverMessage.textContent = 'Mouse is over the button';
});

hoverButton.addEventListener('mouseleave', () => {
    hoverMessage.textContent = 'Mouse left the button';
});