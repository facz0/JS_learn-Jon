//Ejercicio 1
const aleatorio = () => {
    let x = parseInt(Math.random() * (600 - 501) + 501)
    //parseInt((Math.random() * 100) + 500)
    return console.info(x) 
}
aleatorio()

function esCapicua(num = 0){
    if(!num) return console.warn("Ingresa un número")
    if(typeof num !== "number") return console.warn("ingresa un número válido")

    num = num.toString()
    let invertir = num.split("").reverse().join("")
    
    return (num === invertir)
    ? console.info("El número que ingresaste es capicúa")
    : console.warn("El número que ingresaste no es capicúa")
}
esCapicua(2352)

//ejercicio 3
function factorial(x = undefined){
    if(x === undefined) return console.warn("no ingresaste un número")
    if(x<0 | x===0) return console.error("No existe factorial de un número negativo o cero, ingresa un número positivo")
    if(typeof x !== "number") return console.warn("El número ingresado no es válido")
    let num_factorial = 1
    for(let i = 1; i <= x; i++){
        num_factorial *= i
    }
    //for(let i = x; i > x; i--){
    //    num_factorial *= i
    //}
    return console.info(`el factorial de ${x} es ${num_factorial}`)
}
factorial(5) //120