console.log(this)
console.log(window)
console.log(this === window)

this.nombre = "Contexto Global"
console.log(this.nombre)
function imprimir(){
    console.log(this.nombre)
}
imprimir()

const obj = {
    nombre : "contexto objerto",
    imprimir: function(){
        console.log(this.nombre)
    }
}

const obj2 = {
    nombre : "contexto objerto 2",
    imprimir:imprimir
}