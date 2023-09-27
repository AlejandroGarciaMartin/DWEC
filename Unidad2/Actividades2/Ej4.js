let mes

mes = parseInt(prompt('Indica el numero del mes que quieras saber cuantos dias tiene: '))

if(mes <= 12 && mes > 0)
switch (mes) {
    case 1:
        alert('El numero 1 es enero y tiene 31 dias')
        break;
    case 2:
        alert('El numero 2 es febrero y tiene 28 o 29 dias si es bisiesto ')
        break;
    case 3:
        alert('El numero 3 es marzo y tiene 31 dias')
        break;
    case 4:
        alert('El numero 4 es abril y tiene 30 dias')
        break;
    case 5:
        alert('El numero 5 es mayo y tiene 31 dias')
        break;
    case 6:
        alert('El numero 6 es junio y tiene 30 dias')
        break;
    case 7:
        alert('El numero 7 es julio y tiene 31 dias')
        break;
    case 8:
        alert('El numero 8 es agosto y tiene 31 dias')
        break;
    case 9:
        alert('El numero 9 es septiembre y tiene 30 dias')
        break;
    case 10:
        alert('El numero 10 es octubre y tiene 31 dias')
        break;
    case 11:
        alert('El numero 10 es noviembre y tiene 30 dias')
        break;
    case 12:
        alert('El numero 10 es diciembre y tiene 31 dias')
        break;
    default:
        break;
}
else{
    alert('El numero indicado es mayor a no es valido')
}