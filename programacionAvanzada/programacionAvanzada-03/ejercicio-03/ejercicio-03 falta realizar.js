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
    return creden.keys() == usuario.keys();
}

autenticarUsuario(credenciales, usuario);