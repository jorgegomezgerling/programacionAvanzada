// 9. Generación de Token de Autenticación:
// ○ Crea una función llamada generarToken que tome un objeto usuario
// y devuelva un token JWT simulado como una cadena. Puedes usar
// una función como btoa (Base64) para simular la generación del
// token.

class Usuario {
    constructor(nombre, mail){
        this.nombre = nombre;
        this.mail = mail;
    }
}

juan = new Usuario('juan', "juanperez@elraro.com");

function generarToken(usuario){
    const jsonString = JSON.stringify(usuario);
    return btoa(jsonString);
}

console.log(generarToken(juan));