//requireds
//como lo hemos exportado con el module.exports ahora podemos usarlo
// const multiplicar = require('./multiplicar/multiplicar');

//ahora mediante destructuracion vamos a inicializar la funcion de creararchivo de multiplicar
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 'caa';

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));