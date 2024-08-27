// 9. Función que Devuelve Otra Función:
// ○ Crea una función llamada crearMultiplicador que tome un número x
// y devuelva una nueva función que multiplique cualquier número por
// x.

//console.log(Math.round(Math.random(3) * 10));

function crearMultiplicador(x){
    function multiplicacionRandom(x){
        random = (Math.round(Math.random(3) * 10)) 
        console.log(`Se está multiplicando: ${random} * ${x}`);
        return x * random
    }
    return multiplicacionRandom(x)
}

console.log(crearMultiplicador(6))