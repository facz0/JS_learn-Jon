// Clases
class Animal{
    //el constructor de una clase es un método especial que se ejecuta en el momento de instanciar la clase
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    }
    //Métodos
    sonar(){
        console.log("Hago sonidos porque estoy vivo")
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre}`)
    }
}

//aplicando Herencia
class Perro extends Animal{
    constructor(nombre, genero, size){
        //con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero)
        this.size = size
        this.raza = null
    }

    //sobreescribir el método sonar
    sonar(){
        console.log("Soy un perro y ladro")
    }

    ladrar(){
        console.log("GUAUU GUAUUUU!!")
    }

    //un método estático se puede ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log("soy un perro piola que es un crack cazando")
    }

    //los setters y getters son métodos especiales que nos permiten establecer y 
    // obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza
    }

    set setRaza(raza){
        this.raza = raza
    }

}

Perro.queEres()

const mimi = new Animal("Mimi", "hembra"),
scooby = new Perro("Scooby", "Macho", "Gigante")

console.log(mimi)
mimi.saludar()
mimi.sonar()
console.log(scooby)
scooby.sonar()
scooby.saludar()
console.log(scooby.getRaza)
