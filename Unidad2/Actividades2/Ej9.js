let num;
let res1 = 1;

num = parseInt(prompt('Introduzca un numero: '));

while(num > 0){

    res1 = res1 * num ;
    num--;
}
alert('El resultado de su factorial es: ' + res1)