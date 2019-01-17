const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')
    /* let data = '';

    for (let i = 1; i <= 10; i++) {
        data += (`${ base }*${ i } = ${ base*i }\n `);
    }

    fs.writeFile(`Tablas/Tabla${base}.txt`, data, (err) => {
        if (err) throw err;
        console.log('El archivo Tabla2.txt ha sido creado');
    }); 

    let parametro = argv[2];
    console.log(parametro);
    let base = parametro.split('=')[1]
    console.log(base);
    */
    //console.log(process.argv);
    //let argv2 = process.argv;
    //console.log(argv2);

//console.log(argv);

let comando = argv._[0]

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)

        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
        break;

    default:
        console.log('Comando no reconocido');

}