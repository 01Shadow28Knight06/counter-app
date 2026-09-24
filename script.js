let count = 0;

function increase() {
    count = count + 1;
    document.getElementById("counterValue").innerText = count;
}

function decrease() {
    count = count - 1;
    document.getElementById("counterValue").innerText = count;
}