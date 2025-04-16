//Crea un arreglo vacío llamado listaDeCompras.
let listaDeCompras = []

//Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
const agregarProducto = producto =>{
    if(listaDeCompras.includes(producto)){
        console.log('Producto añadido previamente'); //Asegúrate de que no haya productos duplicados en la lista.
    }else{
        listaDeCompras.push(producto);
    }
}

//Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
const eliminarProducto = producto => {
    let indiceDeProductoAEliminar = listaDeCompras.indexOf(producto);

    if(indiceDeProductoAEliminar !== -1){
        listaDeCompras.splice(indiceDeProductoAEliminar, 1);
    }
}

//Implementa una función mostrarLista() que imprima todos los productos de la lista.
const mostrarLista = () => listaDeCompras.forEach(item => console.log(item));


agregarProducto("manzana")
agregarProducto("mango")
agregarProducto("sandia")
agregarProducto("pera")
console.log(listaDeCompras)
eliminarProducto('mango');
mostrarLista(listaDeCompras);
agregarProducto('manzana');
