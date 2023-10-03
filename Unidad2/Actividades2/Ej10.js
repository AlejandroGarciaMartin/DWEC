let numAdivinar = parseInt(prompt('Introduce un numero para que otra persona lo adivine: '));
let numAdivinador;


while(numAdivinar != numAdivinador){
    numAdivinador = parseInt(prompt('Introduce el numero intentado adivinar el del usuario anterior: '));
    if(numAdivinador > numAdivinar){
        alert('el numero introducido es mayor al del anterior usuario, intentelo de nuevo')
    }
    else if(numAdivinador < numAdivinar){
        alert('el numero introducido es menor al del anterior usuario, intentelo de nuevo')
    }
}
alert('Enhoarbuena has acertado el numero correcto');