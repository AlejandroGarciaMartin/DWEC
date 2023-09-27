let suma;
let resta;
let multiplicacion;
let division;
let num1;
let num2;
let operacion;
let res;

num1 = parseFloat(prompt('Introduce un numero'));
operacion = prompt('introduce el signo del tipo de operacion deseas (ejem -> +,-,*,/)');
num2 = parseFloat(prompt('introduce otro numero'));


if(operacion == '+'){
    res = num1 + num2
}
if(operacion == '-'){
    res = num1 - num2
}
if(operacion == '/'){
    res = num1 / num2
}
if(operacion == '*'){
    res = num1 * num2
}

alert('El resultado de la operacion es: '+ res);
