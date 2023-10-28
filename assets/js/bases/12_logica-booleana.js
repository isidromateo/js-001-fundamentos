// Se crean dos funciones - Regresa True y Regresa false
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

// 1º TRANSFORMAR UN BOOLEANO AL OPUESTO
console.warn('Not o la negación');
console.log( true ); // true
console.log( !true ); // false
console.log( !false ); // true
console.log( !!!!!!false ); // Se pueden poner todas las exclamaciones que queramos - hacd true/false/true...

console.log( !regresaFalse() ); // true

// 2ª OPERADOR AND (&&) - True cuando todos los valores son verdaderos
console.warn('And'); // true si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // true

console.log('=========');
console.log(  regresaFalse() && regresaTrue() ); // false
console.log(  regresaTrue() && regresaFalse() ); // false

console.log('==== && =====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones ', true && true && true && false ); // false

// 3º OPERADOR OR (||) - Con un true ya devuelve true sin mirar nada
console.warn('OR'); // true
console.log( true || false );
console.log( false || false );

console.log( regresaTrue() || regresaFalse() );
console.log( '4 condiciones ', true || true || true || false ); // true

// 4º ASIGNACIONES CON OPERADORES (PRO TIP)
console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; // Devuelve FALSE
const a2 = 'Hola' && 'Mundo' && soyFalso && true; // Devuelve FALSE
const a3 = soyFalso || 'Ya no soy falso'; // Devuelve 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true; // Devuelve 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true; //Devuelve TRUE

console.log({a1, a2, a3, a4, a5 });

if ( regresaFalse() && regresaTrue() && (true || false || true) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa'); // Devuelve 'Hacer otra cosa' el IF es FALSE
}



