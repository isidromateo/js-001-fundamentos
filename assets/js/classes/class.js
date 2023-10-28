
// 1- CLASE
//// Por defecto las clases son 'use strict'
class Persona {

    static _conteo = 0;

// 8- SE HACE UN GET DE CONTEO
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método stático');
    }

//// Propiedades de la clase
    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

//// Construtor: Método que se ejecutará en el momento que se crea una nueva instancia
//// Forma básica de inicializar una clase (Definición: codigo (arriba); Pasar argumento: 'Sin código'(Abajo)
//// y asignar valor dentro (this.codigo = codigo))
    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
 //// Para utilizar una propiedad dentro de la clase hay que pone THIS, hace referencia 
 //// a la instancia de clase       
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

// 7- PONER UN CONTADOR - Dentro del constructor es el sitio ideal
        Persona._conteo++;
    }
// 2- SET asigna un valor - Funciona como propiedad, sin llamarse entre parénteis
//// Pasa el texot a mayúscula
    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
// 3- GET recupera un valor - Funciona como propiedad, sin llamarse entre parénteis
//// Poner RETURN
    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


    quienSoy() {
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this.codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}


// 4- CREACIÓN INSTANCIA DE UN CLASE - SE CREA UN OBJETO
const spiderman = new Persona( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
const ironman   = new Persona( 'Tony Stark', 'Ironman', 'Yo soy Ironman' );

// console.log( ironman );

spiderman.miFrase();
// ironman.miFrase();

spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
// spiderman.comida = 'Duende Verde';

// console.log( spiderman.getComidaFavorita );

// console.log( spiderman );
// Persona._conteo = 2;
// 6- LECTURA DEL CONTADOR DEFINIDO EN EL MÉTODO ESTÁTICO
console.log('Conteo stático', Persona._conteo );
console.log( Persona.conteo );
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo';

console.log( Persona.propiedadExterna );
console.log( Persona );