// 10. Métodos Getters y Setters:
// ○ Añade un getter y un setter al objeto libro para la propiedad
// añoDePublicacion. Usa el setter para actualizar el año de publicación
// y luego usa el getter para leerlo.

let libro = {
    titulo: 'El Aleph',
    autor: 'Jorge Luis Borges',
    anioDePublicacion: 1945,

    getAnio: function(){
        console.log(this.anioDePublicacion);
    },
    setAnio: function(anio){
      this.anioDePublicacion = anio;  
    },
};

console.log(libro);
libro.getAnio();
libro.setAnio(1949);
libro.getAnio();
console.log(libro);
