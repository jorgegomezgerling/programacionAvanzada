// 8. Combinar Objetos:
// ○ Usa Object.assign para combinar dos objetos, persona1 y persona2,
// en un nuevo objeto. Imprime el resultado.

persona1 = {
    nombre: 'Juan',
    apellido: 'Martinez',
    cualidadadesExcepcionales: false,
}

persona2 = {
    nombre: 'Milton',
    apellido: 'García',
}

persona3 = {

}

Object.assign(persona3, persona1, persona2);
console.log(persona3);

