const fs = require('fs');
// const colors = require('colors');
// const { resolve } = require('path/posix');


const crearArchivo = (p = 5, listar) => {
        const promesa = new Promise((result, reject) => {

        let salida ='';
        for( i = 1; i <= 10 ; i++)
        {
            salida += `${ p } x ${i} = ${p*i} \n`;
        }
        
        fs.writeFile('./salida/tabla1.txt', salida, (err) =>{
            if(err) 
                reject(err)
            else
                result('tabla1.txt');
        });

        if(listar)
        {
            console.log(' ********Tablas************ ');
            console.log(salida);
        }       

            
    });
    return promesa; 
}

const crearArchivoAsync = async(p = 5, listar) => {
    try {
    
        let salida ='';
        for( i = 1; i <= 10 ; i++)
        {
            salida += `${ p } x ${i} = ${p*i} \n`;
        }

        fs.writeFileSync('./salida/tablaAsync.txt', salida);

        if(listar) {
            console.log(' ********Tablas Async************ ');                
            console.log(salida);
        }

        return 'tablaAsync.txt';

    } catch (error) {
        throw error;
    }
    
}


module.exports = {
    //nombreFuncion:crearArchivo
    crearArchivo,
    crearArchivoAsync
}

   

