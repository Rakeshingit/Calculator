let input_field = document.getElementById("par");

function enterNum(num){
    input_field.value += num;
}


function clearScreen(){
    input_field.value = "";
}

function answer(){
    input_field.value = eval(input_field.value);
}
    


