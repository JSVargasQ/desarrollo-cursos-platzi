let start = Date.now();

function hola(nombre, myCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`, getExecutionTime());
        myCallback(nombre);
    }, 1000);
    }

function adios(nombre, otroCallBack) {
    setTimeout(() => {
        console.log(`Adios, ${nombre}`, getExecutionTime());
        otroCallBack();
    }, 1000);
}
    
console.log('Iniciando proceso...', getExecutionTime());
hola('JuanSe', (nombre) => {
    adios(nombre, () => {
        console.log('Terminando proceso...', `Execution time: ${Date.now() - start} ms`);

        console.log(`Execution time: ${Date.now() - start} ms`);
    });
});

// hola('JuanSe', () =>{});
// adios('Juan', () =>{});


function getExecutionTime() {
    return `\t- Execution time: ${Date.now() - start} ms`;
}