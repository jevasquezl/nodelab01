const fs = require('fs');
const {crearArchivo, crearArchivoAsync} = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(process.argv);
console.log(argv);
console.log(argv.base);

// const [,,arg3 = 'base = 5'] = process.argv;
// const [, base = 1] = arg3.split('=');

// console.log(base);

// let p = 5;



// p = 2;

crearArchivoAsync(argv.base, argv.listar)
.then(ms => console.log(ms))
.catch(er => console.log(er));

// crearArchivo(argv.base, argv.listar)
// .then(ms => console.log(ms))
// .catch(er => console.log(er))

// let i = 1;

// while( i <= 10)
// {
//     console.log ( p + ' x ' + i + "=" + p*i);
//     i++;
// }

// let salida ='';


// console.log(' ******************** ')

// for( i = 1; i <= 10 ; i++)
// {
//     // console.log ( p + ' x ' + i + "=" + p*i);
//     salida += `${ p } x ${i} = ${p*i} \n`;
// }

// // fs.writeFile('tabla.txt', salida, (err) => {
// //     if(err) throw err;
// //     console.log('tabla.txt creado');
// // } );

// fs.writeFileSync('tabla.txt', salida, (err) => {
//     try {
//         console.log('tabla.txt creado');    
//     } catch (err) {
//         throw err;
//     }
// } );



console.log('Orueba 1'.red);
console.log(colors.blue('Otra prueba'));
console.log(colors.inverse('Otra prueba'));