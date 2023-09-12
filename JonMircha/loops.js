// Loops ()ciclos
let contador = 0;
while(contador < 10){
    console.log(contador)
    contador++
}

//Do while
do{
    console.log(contador)
    contador++
} while(contador < 10)

//for(inicialización, condición, incremeto o decremento){sentencias}
let numeros = [10, 20, 30, 40, 50, 60, 70, 80]
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//for in (objetos)
const fab = {
    nombre: "Fabrizio",
    apellido: "Cossío",
    edad: 23,
}
for(const a in fab){
    console.log(fab[a])
}


// for of (arreglos)
for(let e of numeros){
    console.log(e)
}