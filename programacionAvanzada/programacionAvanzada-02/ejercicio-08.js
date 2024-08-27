// 8. Función que Usa Otra Función:
// ○ Crea una función llamada procesarArray que tome un array y una
// función como parámetros, y aplique la función a cada elemento del
// array. Usa una función como parámetro para multiplicar cada
// número por 2.

array = [2, 33, 14, 65, 60]

function multiplicar(numero){
    return numero * 2;
}

function procesarArray(array, multi){
    for (num of array){
        numero = multi(num);
        console.log(numero);
    }
};

procesarArray(array, multiplicar)




