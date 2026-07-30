const counter = document.getElementById("counter");
let currentCount = 0;
counter.innerHTML = currentCount;

const changeColor = function() {
    if (currentCount == 0) {
        counter.style.color = "white";
    } else if (currentCount >= 1) {
        counter.style.color = "#3fd93f";
    } else {
        counter.style.color = "red";
    }
}

// Increase or decrease by entered value 
const number = document.getElementById("number");
let inpNum;
number.value = inpNum;

const inputNum = function() {
    if (inpNum == "") {
        inpNum = 1;
    } else {
        inpNum;
    }
}

const sum = function() {
    inputNum();
    currentCount = currentCount + inpNum;
    counter.innerHTML = currentCount;
    changeColor();
}

function add() {
    // inputNum();
    // currentCount += inpNum;
    currentCount++;
    counter.innerHTML = currentCount;
    changeColor();
}

const reset = function() {
    currentCount = 0;
    counter.innerHTML = currentCount;
    changeColor();
}

const reduce = function() {

    // the code is for not allowing the number to go below 0 
    // if (currentCount <= 0) {
    //     currentCount = 0;
    // } else {
    //     currentCount--;
    // }

    currentCount--;
    counter.innerHTML = currentCount;
    changeColor();
}