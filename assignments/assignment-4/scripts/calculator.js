const display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.classList.contains("error")) {
        display.classList.remove("error");
        display.value = "";
    }
    display.value += input;
}

function clearDisplay() {
    display.classList.remove("error");
    display.value = "";
}

function calculate() {
    try {
        display.classList.remove("error");
        display.value = secureEval(display.value);
    } catch (error) {
        display.classList.add("error");
        display.value = error.message;
    }
}

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
