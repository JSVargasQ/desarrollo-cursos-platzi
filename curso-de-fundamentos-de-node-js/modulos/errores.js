function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(callBack) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            console.error('ERROR: Sobre la funcion asincrona');
            callBack(err);
        }
    })
}


try {
    //otraFuncion();
    seRompeAsincrona((err) => {
        console.log('Hay error en: seRompeAsincrona');
        console.log(err.message);
    });
} catch (err) {
    console.error('ERROR:', err.message);
}

console.log('Fin del proceso');