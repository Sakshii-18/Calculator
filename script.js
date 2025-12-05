let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

// Add number/operator to display
function appendValue(val) {
    display.value += val;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Delete last char
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculate() {
    if (display.value === "") return;

    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Add to history list
function addToHistory(text) {
    let li = document.createElement("li");
    li.textContent = text;

    // click to reuse
    li.onclick = () => {
        display.value = li.textContent.split("=")[1].trim();
    };

    historyList.prepend(li);

    if (historyList.children.length > 5) {
        historyList.removeChild(historyList.lastChild);
    }
}
