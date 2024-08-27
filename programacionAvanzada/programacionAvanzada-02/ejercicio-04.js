// 4. Función que Devuelve un Objeto:
// ○ Crea una función llamada crearPersona que tome nombre y edad
// como parámetros y devuelva un objeto con esas propiedades.

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
};

let persona = new Persona('Jorge', 28);

console.log(persona)
console.log(typeof(persona))
