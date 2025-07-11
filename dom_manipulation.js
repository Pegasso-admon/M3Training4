/**
 * Displays stored user data (name and age) from Local Storage.
 * Updates the 'output' div with a success or info message.
 */
function displayData() {
    const userName = localStorage.getItem('userName');
    const userAge = localStorage.getItem('userAge');
    const outputDiv = document.getElementById('output');

    if (userName && userAge) {
        outputDiv.textContent = `Hello ${userName}, you have ${userAge} years old.`;
        outputDiv.classList.remove('alert-custom-info', 'alert-custom-danger');
        outputDiv.classList.add('alert-custom-success');
    } else {
        outputDiv.textContent = 'No data stored.';
        outputDiv.classList.remove('alert-custom-success', 'alert-custom-danger');
        outputDiv.classList.add('alert-custom-info');
    }
}

/**
 * Initializes the interaction counter in Session Storage if it doesn't exist.
 */
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

/**
 * Increments and displays the session interaction count.
 * Updates the 'interactionCountDisplay' div.
 */
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
    const interactionCountDisplay = document.getElementById('interactionCountDisplay');
    if (interactionCountDisplay) {
        interactionCountDisplay.textContent = `Interactions in this session: ${count}`;
    }
    console.log(`Interactions in this session: ${count}`);
}

/**
 * Event listener for the 'Save Data' button.
 * Captures, validates, and stores user input in Local Storage.
 * Updates the display and interaction count.
 */
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const nameFeedback = document.getElementById('nameFeedback');
    const ageFeedback = document.getElementById('ageFeedback');

    // Basic check for element existence
    if (!nameInput || !ageInput) {
        console.error('Form elements not found.');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // Reset validation states
    nameInput.classList.remove('is-invalid');
    ageInput.classList.remove('is-invalid');
    nameFeedback.style.display = 'none';
    ageFeedback.style.display = 'none';

    let isValid = true;

    // Name validation: not empty, min 2 chars, letters/spaces only
    if (!name || name.length < 2 || !/^[a-zA-Z\s]+$/.test(name)) {
        nameInput.classList.add('is-invalid');
        nameFeedback.style.display = 'block';
        isValid = false;
    }

    // Age validation: valid number, between 1 and 120
    if (isNaN(age) || age < 1 || age > 120) {
        ageInput.classList.add('is-invalid');
        ageFeedback.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData(); // Update displayed data
        updateInteractionCount(); // Increment interaction counter
        alert('Data saved successfully!');
    } else {
        alert('Please correct the errors in the form.');
    }
});

/**
 * Event listener for the 'Clear Data' button.
 * Clears all data from Local Storage.
 * Updates the display and interaction count.
 */
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear(); // Clear all Local Storage items
    displayData(); // Update displayed data (will show "No data stored")
    updateInteractionCount(); // Increment interaction counter
    alert('All stored data has been cleared!');
});

/**
 * Initializes the page on load.
 * Displays stored data and updates the interaction count.
 */
window.onload = () => {
    displayData(); // Show any previously stored data
    updateInteractionCount(); // Update interaction count for the current page load
};

// Note: Interaction count is updated directly within 'saveButton' and 'clearButton'
// click handlers to ensure it's incremented precisely when an interaction occurs.