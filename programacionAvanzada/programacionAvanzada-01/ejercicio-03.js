// 3. Métodos en Objetos:
// ○ Añade un método llamado descripción al objeto libro que devuelva
// una cadena describiendo el título y el autor del libro. Invoca este
// método e imprime el resultado.

let libro = {
    titulo: 'El Aleph',
    autor: 'Jorge Luis Borges',
    anioDePublicacion: 1949,
    descripcion: function(){
        console.log(`Descripción del libro: ${this.titulo} de ${this.autor}`);
    }
}; 

console.log(libro.descripcion());
