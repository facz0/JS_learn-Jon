//Ejercicio 1
const aleatorio = () => {
    let x = parseInt(Math.random() * (600 - 501) + 501)
    return console.info(x) 
}
aleatorio()

function esCapicua(num){
    if(isNaN(num)){
        console.warn("El número ingresado no es válido")
        return
    }
    let capi = num.toString().split(" ").reverse().join("")
    let capicua = parseInt()
    (!num) ? console.warn("No ingresaste ningún número")
    : (num === capi) 
        ? console.info("Es capicua")
        : console.info("No es capicua")
}
esCapicua(232)

//ejercicio 3