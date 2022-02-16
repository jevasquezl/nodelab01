const argv = require('yargs')
.option('b',{
    alias: 'base',
    trypo: 'number'

})
.option('l',{
    alias: 'listar',
    trypo: 'boolean',
    default: false

})
.check((argv, options) => {
    if( isNaN( argv.b )){
        throw 'La base tiene que ser numero '
    }
    return true;
})
.argv;

module.exports = argv;