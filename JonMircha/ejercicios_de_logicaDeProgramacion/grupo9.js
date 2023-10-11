class Pelicula{
    constructor({id,titulo,director,estreno,pais,genero,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.genero = genero;
        this.calificacion = calificacion

        this.validarIMDB(id)
        this.validarTitulo(titulo)
        this.validarDirector(director)
        this.validarEstreno(estreno)
    }

    validarCadena(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
        if (typeof valor !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`)
        return true
    }
    validarLongitudCadena(propiedad, valor, longitud){
        if(valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el valor de números de caracteres
        permitidos (${longitud})`)
        return true
    }
    validarNumero(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
        if(typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado no es ún número`)
        return true
    }
    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`)
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un arreglo`)
        if(valor.length === 0) return console.warn(`${propiedad} "${valor}" no tiene datos`)
        for(let pais of valor){
            if(typeof pais !== "string") return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`)
        }
        return true
    }
    

    validarIMDB(id){
        if(this.validarCadena("IMBD id", id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id))){
                return console.error(`El ID ingresado no es válido. Debe tener 9 caracteres, los 2 primeros
                letras minúsculas, los 7 retamtes números`)
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("titulo", titulo))
            this.validarLongitudCadena("titulo", titulo, 100)
        
    }

    validarDirector(director){
        if(this.validarCadena("director", director)){
            this.validarLongitudCadena("Peli director", director, 50)
        }
    }

    validarEstreno(estreno){
        if(this.validarNumero("Año de Estreno", estreno)){
            if(!(/^([0-9]){4}$/.test(estreno))){
                return console.error(`Año de estreno "${estreno}" debe ser un número de 4 dígitos menor a 2024`)
            }
        }
    }

}

const peli = new Pelicula({
    id: "tt1234567",
    titulo: "La gran Sangre",
    director: "Machín Alcantara",
    estreno: 2020
})

