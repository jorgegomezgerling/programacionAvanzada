// 5. Función que Modifica un Objeto:
// ○ Crea una función llamada actualizarEdad que tome un objeto
// persona y un número nuevaEdad, y actualice la propiedad edad del
// objeto.

function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
};

let yo = new Persona('Jorge', 27);
console.log(yo)

function actualizarEdad(persona,edad){
    persona.edad = edad;
}

actualizarEdad(yo, 28);
console.log(yo)

