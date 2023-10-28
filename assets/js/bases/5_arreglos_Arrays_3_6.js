let videojuegos = [ 'Mario 3', 'Megaman', 'Chrono Trigger'];
console.log([ videojuegos ]);
console.log( videojuegos [0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', ['Dr. Willy', 'Woodman']]
];

// Imprime todo
console.log({ arregloCosas });

// Imprime la posicion 2 (Fernando)
console.log( arregloCosas[2] );

// Imprime la posición 3 del arreglo, dentro del arreglo de
// la posicion 7  (Dr. Light)
console.log( arregloCosas[7] [3] );

// Imprime el arreglo que está dentro del arreglo en la posición
console.log( arregloCosas[7] [4]);

// Imprime la posición 1 del arreglo que está dentro del arreglo 
// de la posicion 7 en la posición 4
console.log( arregloCosas[7] [4] [1]);





