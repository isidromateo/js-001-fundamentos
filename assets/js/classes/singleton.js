
// 1- SINGLETON es una instancia única de la clase
class Singleton {

    static instancia; // undefined
    nombre = '';

    constructor( nombre = '' ) {
  
//// Se valida que hay una llamada. Si la hay se sale. 
        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        }
//// Si no hay llamada se crea una instancia
        Singleton.instancia = this;
        this.nombre = nombre;
    }

}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('BlackPanther');

//// Si se ejecuta solo pone el nombre de primero (Ironman)
console.log(`Nombre en la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre en la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre en la instancia3 es: ${ instancia3.nombre }`);

