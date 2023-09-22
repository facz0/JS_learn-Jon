const conversor = (x, base = undefined) => {
    if(x === undefined) return console.warn("no ingresaste un número a convertir")
    if(typeof x !== "number") return console.warn("El valor ingresado no es un número")
    if(base === undefined) return console.warn("no ingresaste una base a convertir")
    if(typeof base !== "number") return console.warn("El valor ingresado no es un número")

    if(base===2){
        //el método parseInt tiene como parámetros(numero, base del número) para así convertir cualquier número a base
        //decimal 
        return console.info(`${x}, base ${base} = ${parseInt(x, base)} base 10`)
    }
}

//ejercicio 2
const Descuento = (cant_total, porcentaje_descuento) => {
    if (!cant_total | !porcentaje_descuento) return console.error("Ingrese los datos correctos por favor")
    if(typeof cant_total !== "number" | typeof porcentaje_descuento !== "number") return console.error ("Ingresa un número válido")

    let resultado = (cant_total / 100) * porcentaje_descuento
    return console.info(`El ${porcentaje_descuento}% de ${cant_total} es ${resultado}`) 
}
Descuento(5678943,10);

//ejercicio 3
const getYear = (date) => {

    //obtenemos la fecha actual
    const fechaActual = new Date()
    //obtenemos el año actual
    const currentYear = fechaActual.getFullYear()
    //obtenemos el mes actual
    const currentmonth = fechaActual.getMonth() 

    //obtenemos el año a restar con "date"
    const yearForRest = date.getFullYear()
    //obtenemos el mes a restar con "date"
    const monthForRest = date.getMonth()

    let resultantYear = currentYear - yearForRest

    if (currentmonth < monthForRest){
        return resultantYear - 1
    } 
    return resultantYear
}

getYear(new Date(2000,4,23))