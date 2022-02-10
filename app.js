let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

function operate(operator, a, b) {
    if (operator == "+"){
        return a + b;
    } else if (operator == "-") {
        return a - b;
    } else if (operator == "/") {
        return a / b;
    } else if (operator == "*") {
        return a * b;
    }
}
function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue;
    if (displayValue.length > 15) {
        display.innerText = displayValue.substring(0, 15);
    }
}
function clickButton() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            if (buttons[i].classList.contains('operand')) {
                inputOperand(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('operator')) {
                inputOperator(buttons[i].value);
            } else if (buttons[i].classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if (buttons[i].classList.contains('decimal')) {
                inputDecimal(buttons[i].value);
                updateDisplay();
            } else if (buttons[i].classList.contains('percent')) {
                inputPercent(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('sign')) {
                inputSign(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('clear'))
                clearDisplay();
                updateDisplay();
        }
        )
    }
}
function clearDisplay(){
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}
function inputSign(num){
    displayValue = (num * -1).toString();
}
function inputDecimal(dot){
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += dot;
    } else if (!displayValue.includes(dot)) {
        displayValue += dot;
    } 
}
function inputPercent(num){
    displayValue = (num / 100).toString();
}
function inputEquals(){
    
}
function inputOperand(operand){
    if(firstOperator === null) {
        if(displayValue === '0' || displayValue === 0) {
            displayValue = operand;
        } else if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    } else {
        if (displayValue === firstOperand) {
            displayValue = operand;
        } else {
            displayValue += operand;
        }
    }
}
function inputOperator(){

}

updateDisplay()
clickButton()