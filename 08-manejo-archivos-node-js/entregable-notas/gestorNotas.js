
const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  // Leer notas existentes si el archivo ya existe
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  // Guardar las notas actualizadas
  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    console.log('Tus notas:');
    notas.forEach((nota, index) => {
      console.log(`\n${index + 1}. ${nota.titulo}\n   ${nota.contenido}`);
    });
  } else {
    console.log('No hay notas guardadas.');
  }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    if (notas.length === notasRestantes.length) {
      console.log(`⚠️ No se encontró ninguna nota con el título "${titulo}".`);
    } else {
      fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
      console.log(`Nota con título "${titulo}" eliminada.`);
    }
  } else {
    console.log('No hay notas para eliminar.');
  }
}

//Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
agregarNota('Trabajo', 'Terminar el reporte semanal.');
listarNotas();
eliminarNota('Compras');
listarNotas();
