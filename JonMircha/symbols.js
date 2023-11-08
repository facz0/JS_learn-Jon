let id = Symbol("id")
let id2 = Symbol("id2")

console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)

/**********************************************************/
const NOMBRE = Symbol("nombre")
const SALUDAR = Symbol("saludar")
const persona = {
    [NOMBRE]:"Fab"
}
console.log(persona)
persona.NOMBRE = "Fabrizio Cossío"
console.log(persona.NOMBRE)
console.log(persona[NOMBRE])
persona[SALUDAR] = function(){
    console.log(`Hola soy ${this[NOMBRE]}`)
}
console.log(persona)
persona[SALUDAR]()

for(let propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad])
}


