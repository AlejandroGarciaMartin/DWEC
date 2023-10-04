let nombre;
let apellidos;
let salario;
let edad;

nombre = prompt('introduzca el nombre:');
apellidos = prompt('introduce los apellidos: ');
salario = parseFloat(prompt('introduzca su salario: '));
edad = parseInt(prompt('Introduce tu edad: '));


if(salario >= 1000 && salario < 2000){
    if(edad > 45){
        salario = (salario * 0.03) + salario
    }
    else if(edad <= 45){
        salario = (salario * 0.10) + salario
    }
    
}

if(salario < 1000){
    if(edad < 30){
        salario = 1100
    }
    else if(edad >= 30 && edad <= 45){
        salario = (salario * 0.03) + salario
    }
    else if(edad > 45){
        salario = (salario * 0.15) + salario
    }
}

alert('nombre: ' + nombre + '\n' + ' Apellidos: ' + apellidos + '\n' + ' Salario: ' + salario + '\n' + ' Edad: ' + edad )