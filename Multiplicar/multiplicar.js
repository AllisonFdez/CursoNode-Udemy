const fs = require('fs');
const colors = require('colors')

//module.exports.crearArchivo
let listarTabla = (base, limite) => {
    console.log(`= Tabla del ${ base } =`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base }*${ i } = ${ base*i }\n `);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject('No es un número');
            return;
        }
        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += (`${ base }*${ i } = ${ base*i }\n `);
        }
        fs.writeFile(`Tablas/Tabla${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve('Archivo creado:', console.log(colors.yellow(`Tabla${base}.txt`)));
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}