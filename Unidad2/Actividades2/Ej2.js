let edad;
    let residencia;
    residencia = prompt('Zona de residencia: ')
    edad = parseInt(prompt('Indica tu edad: '))

        if(residencia == 'Alicante'){
            if(edad >=18 && edad <= 35){
                alert('Usuario autorizado para acceder al carnet de empresarios emprendedores debido a tu edad.')

            }
            else{
                alert('Disculpa las molestas pero este usuario no es apto para acceder al carnet de empresarios emprendedores.')
            }
        }
        else{
            alert('Disculpa las molestas pero este usuario no es apto para acceder al carnet de empresarios emprendedores devido a tu zona de residencia.')
        }