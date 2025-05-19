const display = document.getElementById("display");

// Map keyboard keys to button IDs for flashing effect
const keyMap = {
    "0": "0",
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "/": "divide",
    "%": "percent", // optional if you add %
    ".": "decimal",
    "Enter": "equals",
    "Escape": "clear",
    "Backspace": null // Backspace doesn’t have a button ID to flash
};

// Add visual feedback to button press
function flashButton(id) {
    const button = document.getElementById(id);
    if (!button) return;
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 100);
}

// Add value to display
function appendToDisplay(input) {
    if (display.classList.contains("error")) {
        display.classList.remove("error");
        display.value = "";
    }
    display.value += input;
}

// Clear the display
function clearDisplay() {
    display.classList.remove("error");
    display.value = "";
}

// Evaluate the expression
function calculate() {
    try {
        display.classList.remove("error");
        display.value = secureEval(display.value);
    } catch (error) {
        display.classList.add("error");
        display.value = error.message || "Invalid Expression";
    }
}

// Safe evaluation to prevent code injection
function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;
    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }

    try {
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        throw new Error("Error evaluating expression.");
    }
}

// Handle keyboard input
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if ("0123456789+-*/.%".includes(key)) {
        appendToDisplay(key);
    } else if (key === "Enter") {
        event.preventDefault(); // Prevent form submission
        calculate();
    } else if (key === "Escape") {
        clearDisplay();
    } else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    const btnId = keyMap[key];
    if (btnId) {
        flashButton(btnId);
    }
});
