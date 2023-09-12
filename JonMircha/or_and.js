//operador de cortocircuito
/*Corto circuito con OR - cuando el valor de la izquierda
en la expresión siempre pueda validar true, es el valor que
se cargará por defecto*/
/*Cortocircuito AND - cuando el valor de la izquierda
en la expresión siempre pueda validar a false, es el valor
que se cargará por defecto*/

function saludar(nombre){
    nombre = nombre || "pupi"
    console.log(`Hola ${nombre}`); 
}
saludar("Jon")
saludar()

//OR(||) "o"
console.log("cadena" || "valor de la derecha")
console.log(19 || "valor de la derecha")
console.log(true || "valor de la derecha")
console.log([] || "valor de la derecha")
console.log(false || "valor de la derecha")
console.log(null || "valor de la derecha")
console.log(undefined || "valor de la derecha")
console.log(0 || "valor de la derecha")

//AND(&&) "y"
console.log("cadena" && "valor de la derecha")
console.log(19 && "valor de la derecha")
console.log(true && "valor de la derecha")
console.log([] && "valor de la derecha")
console.log(false && "valor de la derecha")
console.log(null && "valor de la derecha")
console.log(undefined && "valor de la derecha")
console.log(0 && "valor de la derecha")