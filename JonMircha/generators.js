//el * hace a la funcion un generador
function* iterable (){
    yield "hola"
    console.log("hola consola")
    yield "hola 2"
    console.log("seguimos con más instrucciones en nuestro código")
    yield "hola 3"
    yield "hola 4"
}

let iterador = iterable()
for (let y of iterador){
    console.log(y)
}

//agrupar todo en un arreglo usando spread operator
const arr = [...iterable()]

function cuadrado(valor){
    setTimeout(()=>{
        return console.log({valor: valor, resultado: valor*valor})
    }, Math.random() * 1000)
}

function* generador(){
    console.log("inicia generator")
    yield cuadrado(0)
    yield cuadrado(1)
    yield cuadrado(2)
    yield cuadrado(3)
    yield cuadrado(4)
    yield cuadrado(5)
    console.log("termina generator")
}

let gen = generador()
for(let y of gen){
    console.log(y) 
}








