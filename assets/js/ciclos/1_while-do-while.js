
// 1 - WHILE
// Necesitana i++ para no tener un ciclo infinito
// Para que se ejecute la condición ha de ser verdadera
// Para salir del While se ha de poner BREAK
// CANCELAR EJECUCIÓN: Tres puntos/More Tools/Task Manager: Seleccionar + End Process

const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;

// while( i < carros.length ) {
//     console.log( carros[i] );
//     // i = i + 1;
//     i++;
// }

console.warn('While')
// undefined
// null
// false
while( carros[i] ) {
    if ( i === 1 ){
        // break;
        i++;
        continue;
    }
    
    console.log( carros[i] );
    i++;
}

// 2 - DO WHILE
// Do While como mínimo se ejecutará una vez
// Necesitana i++ para no tener un ciclo infinito
// Si se le da un valor que no existe imprimirá 'undefined', este es el principal 
// Diferencia del While y Do While
console.warn('Do While');
let j = 10;

do {
    console.log( carros[j]);
    j++;
} while( carros[j] );
