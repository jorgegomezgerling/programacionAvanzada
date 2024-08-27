// 2. Procesamiento de Datos de una API:
// ○ Usando la función obtenerUsuarios, crea otra función llamada
// imprimirNombresDeUsuarios que filtre y muestre solo los nombres
// de los usuarios.

//import obtenerUsuarios from "./ejercicio-02";

async function obtenerUsuarios(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        //console.log(json);
        return json;

    } catch (error) {
        console.log(error.message);
    } 
}

async function imprimirNombresDeUsuarios(obtenerU){
    const new_json = await obtenerU();
    //console.log(new_json)
    for (let i = 0; i < new_json.length; i++){
        console.log(new_json[i].name);
    }
}

imprimirNombresDeUsuarios(obtenerUsuarios);