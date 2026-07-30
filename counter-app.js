const counter = document.getElementById("counter");
let text = 0;
counter.innerHTML = text;

function add() {
    text++;
    counter.innerHTML = text;
}

const reset = function() {
    text = 0;
    counter.innerHTML = text;
}

const reduce = function() {
    text--;
    counter.innerHTML = text;
}