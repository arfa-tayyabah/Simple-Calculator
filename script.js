const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let operand1 = 0;
let operator = null;
let screen_output  = 0;
let nextinput = false;
function update_display()
{
    display.value = screen_output;
}
function input_number(number){
    if(nextinput) {
        screen_output = number;
        nextinput = false;
    }
    else{
        if(screen_output == "0"){
        screen_output = number;
    } 
    else{
        screen_output+= number;
    }
    }
    update_display();
}
function input_operator(op){
    if(operator != null)
        calculate();
    operand1 = parseFloat(screen_output);
    operator = op;
    nextinput = true;
}
function calculate(){
    if (operator == null)
        return;
    const operand2 = parseFloat(screen_output);
    let result;
    switch(operator){
        case '+': result = operand1 + operand2;
        break;
        case '-': result = operand1 - operand2;
        break;
        case '*': result = operand1 * operand2;
        break;
        case '/': result = operand1 / operand2;
        break;
    }
    screen_output = String(result);
    operator = null;
    nextinput = true;
    update_display();
}
function ClearAll() {
    operand1 = null;
    screen_output = "0";
    operator = null;
    nextinput = false;
    update_display();
}

