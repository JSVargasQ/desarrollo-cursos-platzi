// File System (fs)
const fs = require('fs');

function leer(ruta, callback) {
    fs.readFile(ruta, (err, data)=> {
        // Leido 
        callback(data.toString());
    });
}

function escribir(ruta, contenido, callback) {
    fs.writeFile(ruta, contenido, (err) => {
        if( err ) {
            console.error('No se ha podido escribir el archivo', err);
        } else {
            console.log('Se ha almacenado el archivo con exito.');
        }
    });
}

function borrar(ruta, callback) {
    fs.unlink(ruta, callback);
}

//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo2.txt', 'Este es mi contenido del archivo :p', console.log);
borrar(__dirname + '/archivo2.txt', console.log);
