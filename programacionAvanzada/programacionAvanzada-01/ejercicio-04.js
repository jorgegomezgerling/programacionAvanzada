// 4. Iteración sobre Propiedades de un Objeto:
// ○ Crea un objeto producto con propiedades como nombre, precio y
// disponible. Usa un bucle for...in para imprimir todas las propiedades
// y sus valores.

producto = {
    nombre: 'Zanahoria',
    precio: 199.50,
    disponible: false,
}

for (prop in producto){
    console.log(prop, producto[prop]);
}