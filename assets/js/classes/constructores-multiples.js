//1- CONSTRUCTORES MÚLTIPLES: Llamar al constructor N veces con N argumentos
class Persona {
//// Se crea un método estático y este crea una nueva instancia de mi persona
/// utilizando el constructor, recibiendo un argumento diferente 
    static porObjeto({ nombre, apellido, pais }) {
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais ) {
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo() {
        console.log(`info: ${ this.nombre }, ${ this.apellido }, ${ this.pais }`);
    }
}

const nombre1   = 'Melissa',
      apellido1 = 'Flores',
      pais1     = 'Honduras';

const fher = {
    nombre:   'Fernando',
    apellido: 'Herrera',
    pais:     'Costa Rica'
}      

// 2 - Se llama varias veces
const persona1 = new Persona( nombre1, apellido1, pais1 );
//// porObjeto es un método como cualqueir otro
const persona2 = Persona.porObjeto( fher );


persona1.getInfo();
persona2.getInfo();



