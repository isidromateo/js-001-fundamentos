// ----------- EXTENDS: CLASES CON SUBCLASES --------------//
// 1- LA DEFINICÓN DE LA CLASE ESTÁ EN EL ARCHIVO CLASS.JS
class Persona {

    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // undefined
        console.log('Hola a todos, soy un método stático');
    }


    nombre = '';
    codigo = '';
    frase  = '';
    comida = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    }
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

// 2- ClASS HEROE: Clase extendida de persona
class Heroe extends Persona{ 
    
    clan = 'sin clan';

    constructor(nombre, codigo, frase) {
// 4- IMPORTANTE: Primero se ha de llamar al constructor padre
// antes de acceder a cualquier propiedad THIS de la nueva clase
        super(nombre, codigo, frase);

        this.clan = 'Los Avengers';
    }

    quienSoy() {
        console.log(`Soy ${ this.nombre }, ${ this.clan }`);
// 3- SUPER: Hace refenencia a la clase que se extiende (Persona)
        super.quienSoy();
    }

}


const spiderman = new Heroe( 'Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman' );
// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();





