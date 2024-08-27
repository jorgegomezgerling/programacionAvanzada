// 7. Función con Función Interna:
// ○ Crea una función llamada despedir que contenga una función
// interna adios. despedir

function despedir(){
    function adios(){
        return 'Prueba de función interna';
    }
    return adios();
}

console.log(despedir());