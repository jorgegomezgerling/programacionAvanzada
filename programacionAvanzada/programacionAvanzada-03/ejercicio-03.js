// 3. Autenticación Simulada:
// ○ Crea una función llamada autenticarUsuario que tome un objeto
// credenciales con usuario y contraseña, y verifique si coinciden con
// un usuario predefinido. La función debe devolver true si la
// autenticación es exitosa y false en caso contrario.

credenciales = {
    usuario: 'Jorge',
    contrasenia: '1234',
}

usuario = {
    usuario: 'Jorge',
    contrasenia: '1234'
}

function autenticarUsuario(creden, usuario){
    if (creden.usuario == usuario.usuario && creden.contrasenia == usuario.contrasenia){
        return true
    }
    return false;
}

resultado = autenticarUsuario(credenciales, usuario);
console.log(resultado);