// 6. Función Recursiva:
// ○ Crea una función recursiva llamada factorial que calcule el factorial
// de un número dado.

function recursiva(numero){
    if (numero < 2){
        return numero
    }
    else {
        console.log(numero = numero * recursiva(numero - 1));
    }
    return numero
}

resultado = recursiva(6)
console.log(resultado);