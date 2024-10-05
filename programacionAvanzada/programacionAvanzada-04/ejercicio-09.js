// 9. Uso de find:
// ○ Crea un array de objetos llamados personas donde cada objeto
// tenga nombre y edad. Usa find para encontrar a la primera persona
// mayor de 30 años.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

juan = new Persona('juan', 3);
brenda = new Persona('brenda', 11);
lulu = new Persona('lulú', 33);
zlatan = new Persona('zlatan', 1);

personas = [juan, brenda, lulu, zlatan];

console.log(personas.find((persona) => persona.edad > 30));

