// 8. Búsqueda de Usuarios:
// ○ Crea una función llamada buscarUsuarioPorEmail que tome un array
// de usuarios y un email como parámetros, y devuelva el usuario que
// coincida con el email proporcionado. Usa el método find para
// implementarlo.


class Usuario {
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }
}

juan = new Usuario('juan', "juanperez@elraro.com");
brenda = new Usuario('brenda', "brendaperez@elraro.com");

arrayDeDatos = [juan, brenda];


function buscarUsuarioPorEmail(array, email) {
    return array.find(usuario => usuario.mail === email);
}

console.log(buscarUsuarioPorEmail(arrayDeDatos, "juanperez@elraro.com"));