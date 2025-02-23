const lightBulb = document.getElementById('lightBulb');
const textChange = document.getElementById('textChange');
const nextPage = document.getElementById('nextPage');
const initialText = document.getElementById('initialText');
const hiddenText = document.getElementById('hiddenText');

// Typing animation for the initial text
function typeText(element, text, speed = 100) {
    let index = 0;
    element.textContent = ''; // Clear the text initially

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed); // Adjust typing speed (100ms per character)
        }
    }

    type(); // Start the typing animation
}

// Apply typing animation to the initial text
document.addEventListener('DOMContentLoaded', function () {
    typeText(initialText, initialText.textContent);
});

function lightBulbClickHandler() {
    // Hide the initial text
    initialText.style.display = 'none';

    // Show the hidden text
    hiddenText.style.display = 'block';

    // Trigger fade-in animation
    setTimeout(() => {
        hiddenText.classList.add('fade-in');
    }, 10); // Small delay to ensure display: block is applied first

    // Change the light bulb to lit
    lightBulb.classList.add('lit');
    lightBulb.style.cursor = 'default';

    // Remove the event listener using a named function
    lightBulb.removeEventListener('click', lightBulbClickHandler);

    // Show the next page link
    nextPage.style.display = 'block';
}

lightBulb.addEventListener('click', lightBulbClickHandler);

