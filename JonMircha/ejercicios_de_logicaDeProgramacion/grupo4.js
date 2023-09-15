const esPrimo = (x) => {
    if (typeof x !== 'number') return console.warn("ingresa un número válido");
    if (!x) return console.warn("Ingresa un número por favor")
    if (x<=1) return console.info(false)

    //for(let i=2; i <= Math.sqrt(x); i++){
    //    if(x % i === 0){
    //        return false
    //    } 
    //} return true

    return console.info(Number.isPrime(x))

}
esPrimo(0)