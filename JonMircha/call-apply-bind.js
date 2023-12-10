console.log(this)
this.lugar = "contexto global"

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`)
}
saludar("habla","pibe") //contaxto global

const obj = {
    lugar: "contexto objeto"
}
saludar.call(obj, "Hola","Fab") //contexto objeto
saludar.apply(obj, ["chau", "mongol"]) //contexto objeto

const persona = {
    nombre: "Fab",
    saludar: function (){
        console.log(`hola ${this.nombre}`)
    }
}
persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(persona)
}
otraPersona.saludar()





