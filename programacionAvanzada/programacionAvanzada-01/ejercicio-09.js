// 9. Copiar Objetos:
// ○ Crea una copia profunda del objeto estudiante utilizando el método
// JSON.parse y JSON.stringify. Modifica la copia y verifica que el objeto
// original no haya sido alterado.

let estudiante1 = {
    nombre: 'Juan',
    edad: 15,
    direccion: {
        calle: 'Mitre',
        ciudad: 'Corrientes',
        pais: 'Argentina',
    }
}

const estudiante2 = JSON.parse(JSON.stringify(estudiante1));

estudiante2.nombre = 'Nacho';

console.log(estudiante1);
console.log(estudiante2);


