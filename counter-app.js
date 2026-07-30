const counter = document.getElementById("counter");
let currentCount = 0;
counter.innerHTML = currentCount;

const updateDisplay = function() {
    counter.innerHTML = currentCount;
    if (currentCount === 0) {
        counter.style.color = "white";
    } else if (currentCount >= 1) {
        counter.style.color = "#3fd93f";
    } else {
        counter.style.color = "red";
    }

    error.innerHTML = "";
}

function add() {
    currentCount++;
    updateDisplay();
}

const reset = function() {
    currentCount = 0;
    updateDisplay();
}

const reduce = function() {

    // the code is for not allowing the number to go below 0 
    // if (currentCount <= 0) {
    //     currentCount = 0;
    // } else {
    //     currentCount--;
    // }

    currentCount--;
    updateDisplay();
}

// Increase or decrease by entered value 
const error = document.getElementById("error");
const numberInput = document.getElementById("number");

const sum = function() {
    // let number = numberInput.value;
    let inpNum = parseInt(numberInput.value);

    if (isNaN(inpNum)) {
        error.innerHTML = "Please enter valid number";
    } else {
        currentCount = currentCount + inpNum;
        updateDisplay();
    }
}