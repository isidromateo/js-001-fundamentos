
// TODOS LOS PRIMITIVOS SON PASADOS POR VALOR Y TODOS LOS OBJETOS POR REFERENCIA
// MUY IMPORTANTE CONSOLE.TIME() para ver la velocidad de la APP en el punto 4

// 1º Ejemplo - Variables con valores más asignación nuevo valor a una de ellas
let a = 10;
let b = a;
a = 30;

// a: 30 y b: 10
console.log({ a, b });

// 2º Ejemplo - Una variable igual a un objeto u objeto literal
let juan = { nombre: 'Juan' };
let ana  = { ...juan };
ana.nombre = 'Ana';

// Juan = 'Juan' y Ana = 'Ana'
console.log({ juan, ana });


// 3º Caso 
const cambiaNombre = ( {...persona} ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter' };
let tony  = cambiaNombre( peter );

// Peter = 'Peter' y Tony = 'Tony'. Sin los corchetes y los tres puntos (SPREAD)
// Peter = 'Tony' y Tony = 'Tony'
console.log({ peter, tony });

// 4º Caso - Arreglos: A una constante se le asigna un arreglo y posteriormente se 
// asigna a otra variable, a esta constante se le añade un valor
////Se utiliza SLICE o SPREAD (...) para romper referencia y que la primera variable
////solo muestre su contenido sin el valor añadido a la segunda
//// MÁS RÁPIDO UTILIZAR SPREAD
const frutas = ['Manzana', 'Pera', 'Piña'];

// MUY IMPORTANTE CONSOLE.TIME() para ver la velocidad de la APP
console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

// Frutas: 'Manzana', 'Pera' y 'Piña'. OtrasFrutas2: 'Manzana', 'Pera', 'Piña' y 'Mango'
// OtrasFrutas2: 'Manzana', 'Pera'y 'Piña'
console.table({ frutas, otrasFrutas });


