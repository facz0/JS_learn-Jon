console.log(this)
console.log(window)
console.log(this === window)

this.nombre = "Contexto Global"
console.log(this.nombre)
function imprimir(){
    console.log(this.nombre)
}
imprimir()