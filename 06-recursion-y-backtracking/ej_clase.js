
//-----------------------RECURSION -------------------

// Cuenta regresiva

function cuentaRegresiva(num) {
    debugger
        if(num === 0){
            console.log('Fin');
            return;
        }

        console.log(num);
        return cuentaRegresiva(num - 1);
}

cuentaRegresiva(10);

//Factorial

function factorial(n) {
    
    //Caso base
    if(n === 0){
        return 1;
    }

    //Llamada recursiva
    return n * factorial(n-1);
}

console.log(factorial(5));