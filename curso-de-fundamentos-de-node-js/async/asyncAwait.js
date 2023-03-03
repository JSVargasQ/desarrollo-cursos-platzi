let start = Date.now();

function getExecutionTime() {
    return `\t- Execution time: ${Date.now() - start} ms`;
}

// Function async

async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola, ${nombre}`, getExecutionTime());
            resolve(nombre);
        }, 1000);
    });
}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Bla bla bla bla bla...`, getExecutionTime());
            resolve(nombre);
        }, 1000);
        //reject('Hay un error. {hablar()}');
    });
}

async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios, ${nombre}`, getExecutionTime());
            resolve();
        }, 1000);
    });
}
    
// =======================================================

async function main() {
    let nombre = await hola('JuanSe');
    await hablar();
    hablar();
    await hablar();
    await adios(nombre);
    console.log('Finalizando el proceso...', getExecutionTime());
};

console.log('Iniciando proceso...', getExecutionTime());
main();

