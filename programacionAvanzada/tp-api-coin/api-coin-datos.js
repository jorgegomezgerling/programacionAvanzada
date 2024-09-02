//const apiKEY = ''; Borro apikey porque me lo solicitó gitHub

async function obtenerDatos(){
    const url = 'https://rest.coinapi.io/v1/exchanges/APIKEY-...';
   
    try {
        const response = await fetch(url);
        json = await response.json();
        console.log('Exchanges: ', json);
    }

   catch (error) {
    console.log(console.log(error.message));
   }


   const primeros16Valores = json.slice(0, 16);
   //console.log(primeros16Valores);
   let body = '';
   for (let elemento = 0; elemento<primeros16Valores.length; elemento++){
        body += `<tr><td>${primeros16Valores[elemento].name}</td><td>${primeros16Valores[elemento].volume_1hrs_usd}</td><td>${primeros16Valores[elemento].volume_1day_usd}</td></tr>`
   }

   document.getElementById('data').innerHTML = body;

}

obtenerDatos();
