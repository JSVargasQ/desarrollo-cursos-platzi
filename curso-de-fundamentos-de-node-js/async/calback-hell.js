let start = Date.now();

function getExecutionTime() {
    return `\t- Execution time: ${Date.now() - start} ms`;
}

// Function async

function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`, getExecutionTime());
        myCallback(nombre);
    }, 1000);
}

function hablar(callBackHablar) {
    setTimeout(() => {
        console.log(`Bla bla bla bla bla...`, getExecutionTime());
        callBackHablar();
    })
}

function adios(nombre, otroCallBack) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`, getExecutionTime());
        otroCallBack();
    }, 1000);
}
    
// =======================================================

console.log('Iniciando proceso...', getExecutionTime());
hola('JuanSe', (nombre) => {

    hablar(() => {
        
        adios(nombre, () => {
            console.log('Terminando proceso...', getExecutionTime());
    
            console.log(getExecutionTime());
        });

    });

});


