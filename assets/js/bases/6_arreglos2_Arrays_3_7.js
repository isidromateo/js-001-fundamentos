let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log( 'Largo:', juegos.length );

let primero = juegos[ 2 -2 ];
let ultimo  = juegos[ juegos.length - 1 ];

console.log({primero, ultimo});

// Recorrer una array
juegos.forEach( (elemento, indice, arr) => {
     console.log({elemento, indice, arr});
});

console.log( juegos );

//Añadir un nuevo elemento con el método PUSH
//let nuevalongitud = juegos.push( 'F-Zero');
console.log({ nuevalongitud, juegos});

//Colocar un nuevo elemento dentro del arreglo
nuevalongitud = juegos.unshift('Fire Emblem'),
console.log({nuevalongitud, juegos});

// Borrar el último elemento de un arreglo 
let juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

// Recorre una Array y borra sus elementos
lv_length = meses.length;
let meses_borrados = meses.splice(0, lv_length);
console.log({ lv_length, meses, meses_borrados });

// Borrar un elemento en alguna posicion específica
let pos = 1;
//// En esta variable coge los que borra
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

// Saber la posición de un juego
let metroidIndex = juegos.indexOf('Metroid'); // CaseSensitive
console.log({ metroidIndex });

