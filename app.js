//requireds
//como lo hemos exportado con el module.exports ahora podemos usarlo
// const multiplicar = require('./multiplicar/multiplicar');

//ahora mediante destructuracion vamos a inicializar la funcion de creararchivo de multiplicar
const { crearArchivo } = require('./multiplicar/multiplicar');

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true, //el valor es obligatorio
            alias: 'b' //se puede introducir como -b
        },
        limite: {
            alias: 'l',
            default: 10 //valor por defecto
        }
    })
    .help()
    .argv;


console.log(argv.base);
console.log(argv.limite);

//------------Antes del Yargs
//Aqui están los parámetros que se envian desde los comandos del terminal
// console.log(process.argv);
//Si introducimos en console node app --base=4 
//let argv2 = process.argv;
// console.log(argv2);
// let parametro = argv2[2];
// let base = parametro.split('=')[1];

// console.log(base);

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(e => console.log(e));