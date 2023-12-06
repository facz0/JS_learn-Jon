console.log(this)
this.lugar = "contexto global"

function saludar(){
    ocnsole.log(`${this.lugar}`)
}
saludar()

const obj = {
    lugar: "contexto objeto"
}