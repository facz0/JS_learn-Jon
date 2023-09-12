// funcion declarada
function estoEsFuncion(){
    console.log("uno")
}
//invocación de una función
estoEsFuncion()

//funcion que devuelve valor
function devolverValor(){
    console.log("dos")
    //return 19 el return siempre manda y todo lo que está debajo se ignora
    return "la funcion retorna hola"
}

let valor = devolverValor();
console.log(valor);

// funcion que recibe valores o parámetros
function saludar(nombre, edad){
    console.log(`hola mi nombre es ${nombre} y tengo ${edad} años`)
}

saludar("Kenai", 7)

//función anónima: en estos casos la función no se puede declarar antes de la línea dónde fue creada
const funcionExpresada = function (){
    console.log("esto es una función expresada")
}
funcionExpresada()




