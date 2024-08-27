// 5. Actualización de Propiedades:
// ○ Modifica el valor de la propiedad precio del objeto producto y luego
// imprime el objeto completo para verificar el cambio.

producto = {
    nombre: 'Zanahoria',
    precio: 199.50,
    disponible: false,
}

for (prop in producto){
    console.log(prop, producto[prop]);
}

producto.precio = 200;

for (prop in producto){
    console.log(prop, producto[prop]);
}