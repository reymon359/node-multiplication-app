//requireds
//como lo hemos exportado con el module.exports ahora podemos usarlo
// const multiplicar = require('./multiplicar/multiplicar');

//ahora mediante destructuracion vamos a inicializar la funcion de creararchivo de multiplicar
const { crearArchivo } = require('./multiplicar/multiplicar');


//Aqui están los parámetros que se envian desde los comandos del terminal
// console.log(process.argv);
//introducimos en console node app --base=4 
let argv = process.argv;
let parametro = argv[2];

let base = parametro.split('=')[1];

console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(e => console.log(e));