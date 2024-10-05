// 10. Actualización de Información del Usuario:
// ○ Crea una función llamada actualizarUsuario que tome un objeto
// usuario y una lista de cambios a aplicar. La función debe retornar el
// usuario con las propiedades actualizadas.

class Usuario {
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }
}

juan = new Usuario('juan', "juanperez@elraro.com");

function actualizarUsuario(usuario, nombre, mail){
    usuario.nombre = nombre;
    usuario.mail = mail;
}

console.log(juan);
actualizarUsuario(juan, "jorge", "jorgegomezgerling@github.com");
console.log(juan);