// Crear una aplicación que le solicite al usuario dos datos
//el nombre y su color favorito()azul,rojo,verde,amarillo y morado)
// si el color es diferente de alguno de los que mencionamos notificarle al usuario y que recargue la pagina para ingresar un color correcto
// crear una función que reciba por parametro el nombre del usuario y el color
// validar segun el color que recibamos por parametro algo que se relacione con el color
// ejemplo si el color es azul, podriamos poner un console.log que diga el color es azul como el mar

//Completar lecturas y buscar que es el DOM y manipulación del DOM.


const nombreUser = prompt('Ingresa tu nombre')
const colorFavorito = prompt('¿Cuál es tu color favorito de: azul,verde,amarillo,morado').toLowerCase();

function validar(colorFavorito){
    if( colorFavorito === 'azul' ){
        console.log(nombreUser, 'Elegiste el color azul como el mar')
    } else if( colorFavorito === 'rojo' ){
        console.log(nombreUser, 'Elegiste el color rojo como el sol')
    } else if( colorFavorito === 'verde' ){
        console.log(nombreUser, 'Elegiste el color verde como el pasto')
    }else if( colorFavorito === 'amarillo'){
        console.log(nombreUser, 'Elegiste el color amarillo como Mcdonalds')
    }else{
        console.log('No elegiste un color valido, recarga la página e intenta de nuevo')
    }

}

validar(colorFavorito)