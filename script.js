const display = document.getElementById('display');
const keys = document.getElementById('keys');

function keydown(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";

}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR"
    }
}