// Primera forma de declaración
function saludar1() {
    console.log('Hola Mundo1');
}

// Segunda forma de declaración - Función anónima
const saludar2= function() {
    console.log('Hola Mundo2');
}

// Tercera forma de declaración - Con argumentos
function saludar3( nombre ) {
    console.log('Hola ' + nombre);
}

// Cuarta forma de declaración - Función de flecha
//// Con argumentos
const saludar4_1 = ( nombre ) => {
    console.log('Hola ' + nombre ); 
}

//// Sin argumentos
const saludar4_2 = ( ) => {
    console.log('Hola Mundo4.2'); 
}


// 1
saludar1();

//2
saludar2();

//3
saludar3('Mundo3');

//4.1
saludar4_1('Mundo4.1');

//4.2
saludar4_2();
