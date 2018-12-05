//requireds
const fs = require('fs');
const colors = require('colors/safe');

let listarTabla = (base, limite = 10) => { //=10 para que sea 10 por defecto

    console.log('===================='.green);
    console.log(`tabla de ${base}`.green);
    console.log('===================='.green);



    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i }`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });
}

//esto es una forma de exportar los archivos de  un sitio a otro, mediante el module
// el cual es un objeto global de node
module.exports = {
    crearArchivo,
    listarTabla
}