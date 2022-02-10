function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function operate(operator, a, b) {
    if (operator == "+"){
       return add(a, b)
    } else if (operator == "-") {
        return substract(a, b)
    } else if (operator == "/") {
        return divide(a, b)
    } else if (operator == "*") {
        return multiply(a, b)
    }
}

function display(){
    const display = document.querySelector("#display");
    const operands = document.querySelectorAll(".operand");
    const clear = document.querySelector(".clear");
    const decimal = document.querySelector(".decimal");

    clear.addEventListener('click', () => {
        displayArr = [];
        displayString = "";
        display.innerText = '0';
        decimal.disabled = false;
    });

    let displayArr = [];
    display.innerText = '0';

    operands.forEach((operand) => {
        operand.addEventListener('click', function appendDisplay(){
            displayArr.push(operand.value);

            let displayString = displayArr.toString().replace(/,/g, '');
            
            if (displayString.length > 15) {
                operands.forEach((operand) => {
                    operand.disabled = true; 
                });
            }
            if (displayString[0] == '.') {
                displayString = '0' + displayString;
            }
            if (displayString.includes(".")) {
                decimal.disabled = true;
            }

            display.innerText = displayString;
        });
    });
}
display()
