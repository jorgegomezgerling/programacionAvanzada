// 6. Comprobación de Propiedades:
// ○ Crea una función llamada tienePropiedad que tome un objeto y una
// cadena como parámetros, y devuelva true si el objeto tiene una
// propiedad con ese nombre, o false en caso contrario.

obj = {
    largo: 1,
    id: 15,
    caracteres: 10,
};

tienePropiedad = function(objeto, cadena){
    for (prop in objeto){
        if (prop == cadena){
            return true;
        }
    }
    return false;
}

console.log(tienePropiedad(obj, 'id'));