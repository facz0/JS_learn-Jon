let id = Symbol("id")
let id2 = Symbol("id2")

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

/**********************************************************/
/*Los símbolos son únicos*/
const NOMBRE = Symbol("nombre")
const SALUDAR = Symbol("saludar")
/*para crear un symbol dentro de un obj se usa []*/
const persona = {
    [NOMBRE]:"Fab"
}
console.log(persona)
/*creamos una propiedad llamada igual que el symbol pero igual son dos cosas
diferentes.*/
persona.NOMBRE = "Fabrizio Cossío"
console.log(persona.NOMBRE)
/*Así se llama a un sybol dentro de un obj... obj[symbol]*/
console.log(persona[NOMBRE])
persona[SALUDAR] = function(){
    console.log(`Hola soy ${this[NOMBRE]}`)
}
console.log(persona)
/*llamar a la función dentro de un sybol */
persona[SALUDAR]()

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}
/*devuelve un array de todos los symbols de un obj*/
console.log(Object.getOwnPropertySymbols[persona])

