//Crea un arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría. Puedes ver el código de ejemplo para este paso en el siguiente enlace: https://gist.github.com/heladio-devf-mx/a2127c7992384fd0fd66893db47ea506
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Usa filter() para obtener los productos que cuesten menos de $100.

const productosMenor100 = array => array.filter(producto => producto.precio < 100);

console.log(productosMenor100(productos));
//Usa sort() para ordenar esos productos alfabéticamente por su nombre.


//Usa map() para generar un nuevo arreglo que contenga solo los nombres de los productos.
const nombresProductos = array => array.map(producto => producto.nombre);

console.log(nombresProductos(productos));


//Muestra los resultados de la aplicación de cada métiodo en consola.


//(Oppcional) Incluye alguno de los métodos faltantes (reduce, some, every, includes, etc.) con algún caso de uso en este ejemplo, usa tu creatividad.