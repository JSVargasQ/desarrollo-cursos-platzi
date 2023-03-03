
for(let i = 0; i < 10; i++) {
    console.count('Veces');
    if( i === 5) {
        console.countReset('Veces');
    }
}

/* function funcion1() {
    console.group('Función 1');
    console.log('Esto es de la función 1');
    console.log('Y es una forma de expresión');
    funcion2();
    console.log('Ya se ejecuto funcion 1');
    console.groupEnd('Función 1');
}

function funcion2 () {
    console.group('Función 2');
    console.log('Por otro lado esta es función 2');
    console.groupEnd('Función 2');
}

console.log('Iniciamos...');
funcion1(); */


/* const { groupEnd } = require("console");

console.log('Hola');
console.info('Info: Información...');
console.error('Error: Ha ocurrido un error');
console.warn('Advertencia: No se te olvide dormir temprano.');

var tabla = [
    { 
        a: 1, 
        b: 'A',
        d: false
    },
    {
        a: 2,
        b: 'B',
        c: true
    }
];
console.table(tabla);

console.group('Conversación');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('Conversación')

console.log('Otra función :p'); */