// 4. Uso de map:
// ○ Crea una función llamada elevarAlCuadrado que tome un array de
// números y devuelva un nuevo array con cada número elevado al
// cuadrado. Usa map para implementar la función.


arrayNumeros = [1, 2, 3, 4, 5, 11];

function elevarAlCuadrado(array){
    cuadrados = array.map((numero) => numero ** 2);
    return cuadrados;
}

console.log(arrayNumeros);
cuadrados = elevarAlCuadrado(arrayNumeros);
console.log(cuadrados);
