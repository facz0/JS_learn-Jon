const conversor = (x) => {

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
    //obtenemos al año actual
    const currentYear = fechaActual.getFullYear()
    //obtenemos en año a restar con "date"
    const yearForRest = date.getFullYear()

    return currentYear - yearForRest
}

getYear(new Date(2000,4,23))