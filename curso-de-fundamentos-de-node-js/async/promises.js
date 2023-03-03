let start = Date.now();

function getExecutionTime() {
    return `\t- Execution time: ${Date.now() - start} ms`;
}

// Function async

function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola, ${nombre}`, getExecutionTime());
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Bla bla bla bla bla...`, getExecutionTime());
            resolve(nombre);
        }, 1000);
        reject('Hay un error. {hablar()}');
    });
}

function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`, getExecutionTime());
            resolve();
        }, 1000);
    });
}
    
// =======================================================

console.log('Iniciando proceso...', getExecutionTime());
hola('JuanSe')
    .then( nombre => hablar(nombre) )
    .then( nombre => hablar(nombre) )
    .then( nombre => hablar(nombre) )
    .then( nombre => adios(nombre) )
    .then( nombre => {
        console.log('Terminado el proceso', getExecutionTime());
    })
    .catch( err => {
        console.error('Ha habido un error:');
        console.error(err);
    });


