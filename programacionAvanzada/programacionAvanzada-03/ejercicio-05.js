// 5. Validación de Formularios:
// ○ Crea una función llamada validarFormulario que tome un objeto con
// los campos nombre, email y password. La función debe devolver true si todos los campos están presentes y no están vacíos, y false en caso
// contrario.


formulario = {
    nombre: 'Juan',
    email: 'juanperez@gmail.com',
    password: '',
}


function validarFormulario(objeto){
    if (objeto.nombre && objeto.email && objeto.password) {
        return true;
    }
    return false;
}

validar = validarFormulario(formulario);
console.log(validar);