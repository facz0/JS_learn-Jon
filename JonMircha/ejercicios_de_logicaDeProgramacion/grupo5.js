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
