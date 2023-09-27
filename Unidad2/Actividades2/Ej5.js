 let num = parseFloat(prompt("Introduce un num: "));
 let res;

    if(num % 2 == 0)
    {
      
    res = 'El numero ' + num + ' es par';

    }
    else{
        res = 'El numero ' + num + ' es impart';
    }
    if(num % 3 == 0){
        res = res + ' ademas es multiplo de 3'
    }
    if(num % 5 == 0){
        res = res + ' y es multiplo de 5 '
    }
    alert(res)