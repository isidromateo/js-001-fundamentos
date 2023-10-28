
// 1º Protip - Creamos una función con dos argumentos 
//// function crearPersona( nombre, apellido ) {
////     return { nombre,apellido }
//// }
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });

const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


//2º Protip -  2.1- Forma tradicional o 2.2- Funciones de flecha
//// 2.1- Imprimir argumentos con función tradicional
function imprimeArgumentos() {
    console.log( arguments );
}

//// 2.2- Las funciones de flecha no imprimen argumentos - Forma de Impresión argumentos de funciones de flechas
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}


//3º Protip - Asignar en variable los argumentos directamente
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });



//4º Protip - Cambiamos el nombre de una propiedad
const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });



//5º Protip -Reestructuración de argumentos
const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

//// Forma poco óptima
// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }

//// Forma más òptima
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );