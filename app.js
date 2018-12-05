//requireds
//como lo hemos exportado con el module.exports ahora podemos usarlo
// const multiplicar = require('./multiplicar/multiplicar');

//ahora mediante destructuracion vamos a inicializar la funcion de creararchivo de multiplicar
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

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
    .command('crear', 'Genera un archivo con la tabla de multiplicar', {
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

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}










//------------Antes del Yargs
//Aqui están los parámetros que se envian desde los comandos del terminal
// console.log(process.argv);
//Si introducimos en console node app --base=4 
//let argv2 = process.argv;
// console.log(argv2);
// let parametro = argv2[2];
// let base = parametro.split('=')[1];
// console.log(base);