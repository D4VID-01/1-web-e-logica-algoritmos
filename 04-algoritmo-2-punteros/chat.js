/* Dado un array de números enteros ordenado de menor a mayor, y un número objetivo, 
encuentra el primer par de números que sumen exactamente ese objetivo. Usa la técnica de dos punteros. */

const numeros = [1, 3, 4, 5, 7, 10, 11];
const objetivo = 14;

const sumaDos = (arr, target) => {
    let derecha = 0;
    let izquierda = arr.length-1;
    

    while(derecha < izquierda){

        let suma = arr[derecha] + arr[izquierda];

        if(suma == target){
            return [arr[derecha], arr[izquierda]];
        } else if(suma>target){
            izquierda--;
        } else{
            derecha++;
        }
    }

    return null;
}

console.log(sumaDos(numeros, objetivo));

/* Esta vez, tienes un array no ordenado. Tu objetivo sigue siendo el
 mismo: encontrar el primer par de números que sumen un número dado. */

const num = [10, 1, 5, 11, 4, 3, 7];
const obj = 14;


const sumTarg = (arr, target) => {

    arr.sort((a, b) => a - b);

    let derecha = 0;
    let izquierda = arr.length-1;

    while(derecha < izquierda){
        let suma = arr[derecha] + arr[izquierda];

        if(suma == target){
            return [arr[derecha], arr[izquierda]]
        } if (suma > target) {
            izquierda--;
        } else {
            derecha++;
        }
    }

    return null;
}


console.log(sumTarg(num, obj));



/* Encuentra todos los pares únicos de números en el array que sumen exactamente el número objetivo.
No repitas pares, y no uses el mismo elemento dos veces. */


const nums = [1, 3, 2, 2, 4, 5, 7, 10];
const objetive = 12;

const paresSuma = (arr, target) => {
    arr.sort((a, b) => a - b);
    let izquierda = 0;
    let derecha = arr.length - 1;
    const resultado = [];

    while (izquierda < derecha) {
        const suma = arr[izquierda] + arr[derecha];

        if (suma === target) {
            resultado.push([arr[izquierda], arr[derecha]]);
            // Saltar duplicados
            while (arr[izquierda] === arr[izquierda + 1]) izquierda++;
            while (arr[derecha] === arr[derecha - 1]) derecha--;
            izquierda++;
            derecha--;
        } else if (suma < target) {
            izquierda++;
        } else {
            derecha--;
        }
    }

    return resultado;
};

console.log(paresSuma(nums, objetive));
