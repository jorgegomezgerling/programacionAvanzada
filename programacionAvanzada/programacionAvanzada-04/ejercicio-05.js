// 5. Uso de filter:
// ○ Crea una función llamada filtrarMayoresDe que tome un array de
// números y un valor de referencia, y devuelva un nuevo array solo con
// los números mayores que ese valor. Usa filter.


arrayNumerosReferencia = [1, 2, 11, 33];

function filtrarMayoresDe(array, minimo){
    return array.filter((numero) => numero > minimo);
}

nuevo_array = filtrarMayoresDe(arrayNumerosReferencia, 2);
console.log(nuevo_array);


//array.map((numero) => numero ** 2);