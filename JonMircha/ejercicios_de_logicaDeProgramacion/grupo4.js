//ejercicio 1
const esPrimo = (x) => {
    if (typeof x !== 'number') return console.warn("ingresa un número válido");
    if (!x) return console.warn("Ingresa un número por favor")
    if (x<=1) return console.info(false)

    for(let i=2; i < x; i++){
        if(x % i === 0){
            return false
        } 
    } return true
}
esPrimo(0)

//Ejercicio 2
const esPar = (x) => {
    if (!x) return console.warn("No ingresaste ningún número")
    if (typeof x !== "number") return console.warn("Ingresa un número válido")
    
    if (x % 2 === 0){
        return console.log(`El numero ${x}, es par`)
    } else {
        return console.log(`${x} es impar`)
    }
}

esPar(276)

//ejercicio 3
const conversion = (n = 0, nomenclatura = "") => {
    if(!n | !nomenclatura) return console.warn("ingresa ambos valores")
    if(typeof n !== "number" ) return console.warn("ingresa un número válido")
    if (nomenclatura !== "C" && nomenclatura!== "F") return console.warn("ingresa una C o F")

    if(nomenclatura === "C"){
        let Fahrenheit = (n * 9/5) + 32
        return console.info(`${n} grados C° son ${Fahrenheit} grados F°`)
    } else if(nomenclatura === "F"){
        let celcius = (n - 32) * 9/5
        return console.info(`${n} grados F° son ${celcius} grados C°`)
    }
}

conversion(3,"C")
