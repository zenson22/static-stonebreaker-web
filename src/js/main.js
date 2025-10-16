// Main JavaScript functionality for the product showcase website

// Event listener for DOMContentLoaded to ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners and other functionalities here
    console.log('Product Showcase Website Loaded');

    // Example: Add a click event listener to a button
    const button = document.getElementById('example-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('Button clicked!');
        });
    }
});