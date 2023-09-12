//POO
/*
Clases -- Modelo a seguir
Objetos -- Es una instancia de una clase
    Atributos -- es una característica o propiedad del objeto(son variables
    dentro de un objeto)
    Métodos -- Son las acciones que un objeto puedes realizar (son funciones
    dentro de un objeto)
*/

//objetos normales
const animal = {
    nombre: "snoopy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
}
const animal2 = {
    nombre: "Lola Bunny",
    sonar() {
        console.log("Hago sonidos porque estoy vivo")
    }
}
console.log(animal)
console.log(animal2)


//Un modalidad para un mejor manejo de los objetos
//Función Constructora


function Animal (nombre, genero){
    //Atributos
    this.nombre = nombre
    this.genero = genero
} 
//Métodos
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo")
}
Animal.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre}`)
}

//Herencia Prototípica
function Perro(nombre, genero, size){
    //invocar el prototipo Animal
    this.super = Animal
    this.super(nombre, genero)
    this.size = size
}
//Perro está heredando de animal
Perro.prototype = new Animal()
Perro.prototype.constructor = Perro
Perro.prototype.ladrar = function(){
    console.log("GUAUUU GUAUUU!!")
}
//Sobreescribir métodos del prototipo padres en el hijo
Perro.prototype.sonar = function(){
    console.log("soy un perro y ladro")
}
Perro.prototype.saludar = function(){
    console.log(`hola mi nombre es ${this.nombre} que abuzom`)
}



const snoopy = new Perro("Snoopy","Macho","Mediano"),
lola = new Animal("Lola Bunny","Hembra")

console.log(snoopy)
console.log(lola)
snoopy.sonar()
snoopy.saludar()
snoopy.ladrar()

lola.sonar()
lola.saludar()



