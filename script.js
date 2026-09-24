let count = 0;

// Grab the counter heading element once so we can use it easily
const counterElement = document.getElementById("counterValue");

function increase() {
    count = count + 1;
    counterElement.innerText = count;
    updateColor();
}

function decrease() {
    count = count - 1;
    counterElement.innerText = count;
    updateColor();
}

function resetCounter() {
    count = 0;
    counterElement.innerText = count;
    updateColor();
}

// This function handles the dynamic color logic
function updateColor() {
    if (count > 0) {
        counterElement.style.color = "#2ecc71"; // Green for positive
    } else if (count < 0) {
        counterElement.style.color = "#e74c3c"; // Red for negative
    } else {
        counterElement.style.color = "#ffffff"; // White for zero
    }
}