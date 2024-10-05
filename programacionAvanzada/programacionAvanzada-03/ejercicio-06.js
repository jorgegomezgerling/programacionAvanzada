// 6. Paginación de Datos:
// ○ Crea una función llamada obtenerPagina que tome un array de
// datos y un número de página. La función debe devolver los
// elementos correspondientes a esa página, asumiendo que cada
// página tiene 5 elementos.

array = [1, "leonardo", false]


function obtenerPagina(array, numero_pagina){
    return array[numero_pagina];
}

console.log(obtenerPagina(array, 1));