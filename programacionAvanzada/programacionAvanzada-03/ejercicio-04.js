// 4. Transformación de Datos:
// ○ Crea una función llamada mapearUsuarios que tome un array de
// usuarios obtenidos de la API y devuelva un nuevo array con solo las
// propiedades nombre y email de cada usuario.

async function getData(){
    const url = 'https://jsonplaceholder.typicode.com/comments';

    try{
        const response = await fetch(url);
        if (!response.ok){
            throw new Error(`${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (error) {
        console.log(error.message);
    }
}

async function mapearUsuarios(gData){
    let data = await gData();
    let array = [];
    for (i = 0; i < 16; i++){
        array.push(data[i].name, data[i].email);
    }
    console.log(array);
    return array;
}

console.log(mapearUsuarios(getData))