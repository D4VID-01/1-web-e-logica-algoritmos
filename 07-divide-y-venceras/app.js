function findMax(arr) {
    // Caso base: si el arreglo tiene solo un elemento, ese es el máximo
    if (arr.length === 1) {
        return arr[0];
    }

    // Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamadas recursivas para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Combinar: devolver el mayor entre ambos
    return Math.max(leftMax, rightMax);
}

// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10
