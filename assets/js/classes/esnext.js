
// ---- PROPIEDADES PRIVADAS --- //
class Rectangulo {

    #area = 0;
//// 1- Creación del constructor
    constructor(base = 0, altura = 0) {
        this.base   = base;
        this.altura = altura;
//// Poniendo almohadilla se impide que se pueda modificar
//// el valor de AREA
        this.#area = base * altura;
    }
//// Creando otro método si que se podría modificar AREA
    calgularArea() {
        console.log( this.#area * 2 );
    }
}

//// 2 - Creación de instancia
const rectangulo = new Rectangulo(10, 15);

//// 3 - Se podría modificar 'Area'. 
// rectangulo.#area  = 100;
rectangulo.calgularArea();

console.log(rectangulo);



