

// Importando el fs (file s)
const fs = require('fs');


// 👉 Para leer archivos 
// 1. Ruta del archivo 
// 2. Set de caracteres
// 3. Finción que se ejecuta después de resolver el llamado
/* 
fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err){
        console.log(err);
    }else{
        console.log(contenido);
    }
})
 */
// 👉 Para renombrar archivos 
// 1. Ubicación del archivo a renombrar
// 2. Nuevo nombre del archivo 
// 3. Función para capturar el error 

/* fs.rename('index.html', 'vista.html', err => {
    if(err){
        throw err;
    }
} );
 */

// 👉 Agregar información al final del archivo 

// 1. Ubicación del archivo 
// 2. Contenido a añadir 
// 3. Función para capturar el error 

/* fs.appendFile('vista.html', '<h1>NodeJs</h1>', err => {
    if(err){
        throw err;
    }

    console.log('El contenido se añadió')
} );
 */

// 👉 Remplazar información al final del archivo 

/* fs.writeFile('vista.html', 'Los 3 cochinitos y el lobo', err => {
    if(err){
        throw err;
    }

    console.log('El contenido se remplazó')
} ); 
 */

// 👉 Eliminar un archivo 

fs.unlink('vista.html', err =>{
    if (err) {
        throw err;
    }

    console.log('Archivo eliminado');
});