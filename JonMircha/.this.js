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
obj.imprimir()

const obj2 = {
    nombre : "contexto objerto 2",
    imprimir:imprimir
}
obj2.imprimir()

const obj3 = {
    nombre : "contexto objerto 3",
    //la arrow function no genera scope a diferencia de la anónimas
    //por esa razón se imprimirá en nombre el contexto global dado arriba
    imprimir:() => {
        console.log(this.nombre)
    }
}
obj3.imprimir()

function persona(nombre){
    const that = this
    that.nombre = nombre
    //this.nombre = nombre

    //return console.log(this.nombre)
    //esta funcion al no tener una propiedad "nombre" apunta al contexto global
    return function(){
        console.log(that.nombre)
    }
}
let jon = new persona("Jon")
jon()


