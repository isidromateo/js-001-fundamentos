const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];


// Recorrer una array
//meses.forEach( (elemento, indice, arr) => {
//   meses.splice(0, 1);
//   console.log({elemento, indice});
//});

lv_length = meses.length;
let meses_borrados = meses.splice(0, lv_length);

console.log( 'Meses:', meses );
console.log( 'Meses_borrados:', meses_borrados);

//meses.splice(2, 1);
//console.log(meses);

// Resultado -> ["Enero", "Febrero", "Abril", "Mayo"]