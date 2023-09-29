//ejercicio 1:
const ordenArr = (arr = []) => {
    if(!(arr instanceof Array)){return console.warn("No ingresaste un arreglo de números")}
    if(arr.length === 0){return console.error("el array está vacío")}
    for(let num of arr){
        if(typeof num !== "number"){return console.error("Solo se admiten números")}
    }
    const arrCopia = [...arr]
    let ascendente = arr.sort(function(a,b){return a-b})
    let descendente = arrCopia.sort(function(a,b){return b-a})
    return console.info(`Array ascendente: ${ascendente} \nArray descendente: ${descendente}`)
}
ordenArr([23,4,67,34,15,23])

//ejercicio 2