let fin = 1;
let operacion = 0;
let ask; 

do {

    ask = parseInt(prompt('Indica un numero, cuando no quieras mas introduce un 0 para acabar.'));
    console.log(ask)
    if(ask != 0){
        operacion = operacion + ask;
        fin++;
    }
    else{
        fin = 0;
    }
    
}while (fin != 0);

alert('La suma total es: ' + operacion);