// 1. Consumo de Datos desde una API:
// ○ Crea una función llamada obtenerUsuarios que haga una petición
// HTTP a la API https://jsonplaceholder.typicode.com/users usando
// fetch. Luego, imprime en la consola la lista de usuarios obtenida.

async function obtenerUsuarios(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    try {
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error.message);
    } 
}

obtenerUsuarios()

