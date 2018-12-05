//creamos un objeto opciones (opts) que contenga la configuracion de los parametros base y límite
const opts = {
    base: {
        demand: true, //el valor es obligatorio
        alias: 'b' //se puede introducir como -b
    },
    limite: {
        alias: 'l',
        default: 10 //valor por defecto
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}