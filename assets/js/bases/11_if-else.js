
// 1 - Solución con objetos / Calcular día de la semana
const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miércoles',
    4:'jueves',
    5:'viernes',
    6:'sábado',
}

////dia = 8; - Prueba para día no definido

//// día de la semana
console.log( diasLetras[dia] || 'Día no definido');



// 2 - Solución con arreglos / Calcular día de la semana
//// Las variables le añadimos 1 (dia1 y hoy1) ya que arriba están declaradas
const hoy1 = new Date(); // {}
let dia1 = hoy.getDay(); // 0: Domingo, 1: lunes, 2: martes.....

const diasLetras2 = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado',];


//// día de la semana
console.log( diasLetras2[dia1] );