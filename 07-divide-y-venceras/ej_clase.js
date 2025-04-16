

// Suma de números en un array

function sumadyv (arr) {
    debugger
        //Caso base
        if(arr.length === 1){
            return arr[0]
        }

        //Dividir
        const medio = Math.floor(arr.length/2)
        const izq = arr.slice(0, medio)
        const der = arr.slice(medio)

        //Conquistar
        const sumaIzq = sumadyv(izq)
        const sumaDer = sumadyv(der)

        //Combinar
        return sumaIzq + sumaDer
    }
console.log( sumadyv([1,4,3,5,8,2,7]))