// 6. Uso de reduce:
// ○ Crea una función llamada sumarElementos que tome un array de
// números y devuelva la suma de todos los elementos del array
// usando reduce.

//array.map((numero) => numero ** 2);

array = [1, 2, 11, 33];

function sumarElementos(array){
    const resultado = array.reduce((acumulador, numero) => acumulador + numero, 0);
    return resultado;
}


numero = sumarElementos(array);
console.log(numero);