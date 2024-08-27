// 2. Anidación de Objetos:
// ○ Crea un objeto llamado estudiante con propiedades nombre, edad y
// direccion. direccion debe ser otro objeto con propiedades calle,
// ciudad y pais. Imprime la dirección completa del estudiante.

let estudiante = {
    nombre: 'Juan',
    edad: 15,
    direccion: {
        calle: 'Mitre',
        ciudad: 'Corrientes',
        pais: 'Argentina',
    }
}


console.log(estudiante.direccion);