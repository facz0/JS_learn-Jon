// arrow function

const saludar = () => {
    console.log("hols")
}
saludar()

// cuando hay parámetros no es necesario los parétesis
const saluda = nombre =>{
    console.log("hola pe")
}
saluda()

const sumar = (a,b) => a+b
console.log(sumar(8,9))

const funcionVariasLineas = () =>{
    console.log(1)
    console.log(2)
    console.log(3)
}
funcionVariasLineas()

const numeros = [1,2,3,4,5]
numeros.forEach((el,index) => console.log(`el elemento ${el} está en la posicion ${index}`))



