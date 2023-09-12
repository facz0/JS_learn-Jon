// Objeto console
console.log(console)
console.error("deja de equivcarte mongól")
console.warn("TERREMOTOOOOO")
console.info("Hola me llamo Fabrizio")

let nombre ="Fabrizio",
apellido ="Cossio",
edad = 23

console.log(nombre, edad, apellido)
console.clear() //limpia consola

//console.log(window)
//console.log(document)imprime la estrucutra de la página
//console.dir(window)
//console.dir(document) imprime todos las propiedades, objetos, elementos del documento HTML

console.group("cursos de @jonmurcha en youtube")
console.log("Javascript")
console.log("Node.js")
console.log("React JS")
console.groupEnd();
console.table(Object.entries(console).sort())

const numeros =[1,2,3,4,5],
vocales =["a","e","i","o","u"]
console.table(numeros)
console.table(vocales)

const perro = {
    nombre: "algodón",
    raza: "pitbull",
    color: "cafe"
}
console.table(perro)

console.time("cuanto tiempo tarda mi código")
const arreglo = Array(100000)
for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i
}

console.timeEnd("cuanto tiempo tarda mi código")

//for(let i = 0; i < 10; i++){
//    console.count("código for:")
//    console.log(i)
//}

let x = 1,
y = 2,
pruebaXY = "se espera que X siempre se menor que Y"
console.assert(x<y, {x,y,pruebaXY})
