const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let input_string = "0";
let result_shown = false;
function update_display()
{
    display.value = input_string;
}
function get_input(number){
    if(result_shown){
        input_string = "";
        result_shown = false;
    }
    if(input_string =="0"){
        input_string = input_string.slice(0, -1);
    }
    input_string += number;
    update_display();
}
function calculate(){
    try {
        let result = eval(input_string);
        input_string = String(result);
        result_shown = true;
    } catch(e) {
        input_string = "Error";
    }
    update_display();
}
function ClearAll() {
    input_string = "0";
    update_display();
}
function backspace() {
    input_string = input_string.slice(0, -1);
    update_display();
}