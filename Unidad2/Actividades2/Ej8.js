let num 
let cadena = '';

for(i = 25;i > 0; i--){

    if(i % 2 == 0){
        cadena = cadena + i + ' | ';
    }

   

}
alert('Los numero pares del 25 al 1 son: ' + cadena)