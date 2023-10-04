let num = prompt("Por favor, introduce un número:");

function VerificarNumero(){
    if(!isNaN(num)){
        alert('Es un numero');

    }
    else{
        alert('No es un numero');
    }

}

VerificarNumero();
