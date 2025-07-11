# User Data & Interaction Management

<img width="1918" height="1031" alt="image" src="https://github.com/user-attachments/assets/1f0a4bde-c72a-456b-a7a0-b327997871dd" />


This project creates an interactive web page using HTML, CSS (Bootstrap), and JavaScript to manage user data with browser storage mechanisms (Local Storage and Session Storage). It features dynamic DOM manipulation, input validation, and a dark, professional theme.

## Features

* **User Data Form:** Capture user's name and age.
* **Local Storage Persistence:** Save user data persistently across browser sessions using Local Storage.
* **Session Interaction Counter:** Track user interactions within the current browser session using Session Storage.
* **Dynamic Display:** Show stored data and interaction count dynamically on the page.
* **Data Clearing:** Button to clear all stored data from Local Storage.
* **Input Validation:** Robust client-side validation for name (min. 2 chars, letters/spaces only) and age (numeric, range 1-120).
* **Bootstrap Styling:** Professional and responsive design using Bootstrap 5.
* **Dark Theme:** Aesthetic dark mode with a refined blue color palette and subtle shadow effects.
* **Concise Code:** Follows good programming practices with clear, concise comments.

## Technologies Used

* **HTML5:** Structure of the web page.
* **CSS3:** Styling, including a custom dark theme and specific layout adjustments.
* **Bootstrap 5:** Responsive design and UI components.
* **JavaScript (ES6+):** DOM manipulation, local/session storage management, event handling, and data validation.

## Setup and Usage

To run this project:

1.  **Clone or Download:** Get the project files (index.html, dom_manipulation.js, style.css) into a local folder.
2.  **Open `index.html`:** Simply open the `index.html` file in your web browser.

The application will load, and you can interact with the form to save data, clear data, and observe the interaction counter.

## How it Works

* **`index.html`**: Defines the page structure, includes Bootstrap, links to the custom CSS for styling, and imports the JavaScript file. It sets up the form, data display area, and interaction counter display.
* **`style.js`**: Provides the visual styling. It implements the dark theme, centers the main content, applies shadows to cards, and uses a blue color palette for various elements like buttons and alerts.
* **`dom_manipulation.js`**: Contains the core logic:
    * **`displayData()`**: Reads `userName` and `userAge` from `localStorage` and updates the output `div`.
    * **`updateInteractionCount()`**: Increments a `sessionStorage` counter and displays it.
    * Event listeners for "Save Data" and "Clear Data" buttons handle data manipulation and validation, and trigger updates to the display and interaction count.
    * `window.onload` ensures data and count are displayed when the page first loads.

## Good Practices

* **Separation of Concerns:** HTML, CSS, and JavaScript are in separate files.
* **Meaningful Variable Names:** Variables are named descriptively (e.g., `nameInput`, `interactionCount`).
* **`let` and `const`:** `const` is used for variables whose values do not change, and `let` for those that do.
* **Input Validation:** Comprehensive client-side validation provides immediate feedback.
* **Error Handling:** Basic checks for DOM element existence are included.
* **Concise Comments:** Code is commented concisely to explain complex logic or important sections.
