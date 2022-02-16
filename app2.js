const fs = require('fs');
const {crearArchivo, crearArchivoAsync} = require('./helpers/multiplicar')
const argv = require('yargs')
.option('b',{
    alias: 'base',
    trypo: 'number'

})
.check((argv, options) => {
    if( isNaN( argv.b )){
        throw 'La base tiene que ser numero '
    }
    return true;
})
.argv;


// console.log(process.argv);

console.log(argv.base);

console.log(argv.otro);
