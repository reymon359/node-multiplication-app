//requireds
const fs = require('fs');



let base = 4;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base * i }\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`The file tabla-${base}.txt has been saved!`);
});