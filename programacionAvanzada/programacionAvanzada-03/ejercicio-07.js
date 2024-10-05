// 7. Envío de Datos a una API:
// ○ Crea una función llamada enviarDatos que tome un objeto data y
// haga una petición POST a la API
// https://jsonplaceholder.typicode.com/posts. La función debe
// imprimir la respuesta de la API.

function enviarDatos(data){
    var url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
        "Content-Type": "application/json",
    },
    })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
    }

var data = { username: "prueba de documentación" };
enviarDatos(data);