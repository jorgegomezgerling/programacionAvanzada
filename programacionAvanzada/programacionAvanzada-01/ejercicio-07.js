// 7. Eliminación de Propiedades:
// ○ Elimina la propiedad disponible del objeto producto. Imprime el
// objeto antes y después de eliminar la propiedad.

producto = {
    nombre: 'Zanahoria',
    precio: 199.50,
    disponible: false,
}

for (prop in producto){
    console.log(prop, producto[prop]);
}

delete producto.disponible

for (prop in producto){
    console.log(prop, producto[prop]);
}