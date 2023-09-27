let numHer;
    let cantidad;
    let res;
    numHer = parseInt(prompt('Indica El numero de hermanos que tienes '))
     
    cantidad = prompt('Indica la cantidad que pagas: ')

    if(numHer >=3){
        res = (cantidad /100) * 15
        cantidad = cantidad - res;
        alert('La cantidad con el 15% de descuento sera: ' + cantidad)
    }
    else if(numHer <3 && numHer > 0)
    {
        res = (cantidad / 100) * 5
        cantidad = cantidad - res;
        alert('La cantidad con el 5% de descuento sera: ' + cantidad)
    }
    else{
        res = cantidad
        alert('La cantidad sin descuento sera: ' + cantidad)

    }