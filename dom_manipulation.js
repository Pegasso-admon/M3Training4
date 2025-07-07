//Event to save data in local storage
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    if (!nameInput || !ageInput) {
        console.error('The elements of the form doesnt exist.');
        return;
    }

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        alert('Please, enter a valid name and numeric age.')
    }
});

//Function to display stored data
    function displayData() {
        const name = localStorage.getItem('userName');
        const age = localStorage.getItem('userAge');
        const outputDiv = document.getElementById('output');
        if (name && age) {
            outputDiv.textContent = `Hello ${name}, you have ${age} years old.`;
        } else {
            outputDiv.textContent = 'No data stored.'
        }
    }
//On page load, display the stored data
    window.onload = displayData;

//Initialize interaction counter in storage session
    if (!sessionStorage.getItem('interactionCount')) {
        sessionStorage.setItem('interactionCount', 0);
    }

//Update interaction counter 
    function updateInteractionCount() {
        let count = parseInt(sessionStorage.getItem('interactionCount'));
        count++;
        sessionStorage.setItem('interactionCount', count);
        console.log(`Interactions in this session: ${count}`);
    }

//Assign events to the counter
    document.getElementById('saveButton').addEventListener('click', updateInteractionCount);
    document.getElementById('clearButton').addEventListener('click', updateInteractionCount);

//Event to clear data from local storage
    document.getElementById('clearButton').addEventListener('click', () => {
        localStorage.clear();
        displayData();
    })