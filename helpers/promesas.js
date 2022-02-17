

const miFuncion1 = async() => {


    const valores = [ 'gato', 'perro', 'pajaro'];
    var i = 0;

    do{
        console.log(valores[i]);
        i++;
    } while ( valores[i] )

}


const miFuncion2 = async() => {


    const valores = [ 'lion', 'lobo', 'aguila'];
    var i = 0;

    do{
        console.log(valores[i]);
        i++;
    } while ( valores[i] )

}



module.exports = { miFuncion1, miFuncion2};