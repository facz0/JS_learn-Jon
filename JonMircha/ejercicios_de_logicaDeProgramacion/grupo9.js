class Pelicula{
    constructor({id,title,director,estreno,pais,genero,calificacion}){
        this.id = id;
        this.title = title;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion

        this.validarIMDB(id)
    }

    validarCadena(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`)
        return true
    }
    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" escede el valor de números de caracteres
        permitidos (${longitud})`)
    }

    validarIMDB(id){
        if(this.validarCadena("IMBD id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`El ID ingresado no es válido. Debe tener 9 caracteres, los 2 primeros
                letras minúsculas, los 7 retamtes números`)
            }
        }
    }

    validarTitulo(title){
        if(this.validarCadena("Peli titulo", title)){
            this.validarLongitudCadena("Peli titulo", )
        }
    }

}

const peli = new Pelicula({
    id: "tt1234567"
})

