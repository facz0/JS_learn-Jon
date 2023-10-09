class Pelicula{
    constructor(id,title,director,estreno,pais,genero,calificacion){
        this.id = "ID";
        this.title = "title";
        this.director = "director";
        this.estreno = "estreno";
        this.pais = "pais";
        this.genero = "genero";
        this.calificacion = "calificacion"

        this.validarIMDB(id)
    }

    validarCadena(propiedad, valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`)
    }
    validarIMDB(id){
        if(this.validarCadena("IMBD id", id)){
            if(/^([a-z]){2}([0-9]){7}$/.test(id)){
                return console.error(`El ID ingresado no es válido. Debe tener 9 caracteres, los 2 primeros
                letras minúsculas, los 7 retamtes números`)
            }
        }
    }

    }

const peli = new Pelicula({
    id: "33holawer"
})