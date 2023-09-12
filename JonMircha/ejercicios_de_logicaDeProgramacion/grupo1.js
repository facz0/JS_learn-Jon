function devolver(){
    let cadena = "hola Mundo"
    return cadena.length
}
devolver() //devuelve 10

//otra solución con operador ternario
const Devolver = (cadena5 = "") => {
    (!cadena5) ? 
    console.warn("Ingresa una cadena de text válida")
    : console.info(`La cadena tiene ${cadena5.length} caracteres`)
}
Devolver("hola mundo")

function cortar(){
    let cadena2 = "Hola Mundo"
    return cadena2.slice(0,4)
}
cortar() // devuelve "Hola"

function miArray(){
    let cadena3 = "hola que tal"
    return cadena3.split(" ")
}
miArray() // devuelve ["hola", "que", "tal"]

function repetir(){
    let cadena4 = "hola mundo "
    return cadena4.repeat(3)
}
repetir() // devuelve "hola mundo hola mundo hola mundo"