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
const borrarDuplicados = (arr3 = []) => {
    const newArray3 = []
    for(let i = 0; i < arr3.length; i++){
        if(newArray3.indexOf(arr3[i]) === -1){
            newArray3.push(arr3[i])
        }
    }
    return newArray3
}
borrarDuplicados([1,1,2,2,3,3,4,5,6])

//ejercicio 3:
const calcularPromedio = (nums = []) => {
    contador = 0
    for(let i = 0; i < nums.length; i++){
        contador = contador + nums[i]
    }
    return console.info(contador / nums.length)
}

calcularPromedio([1,2,3,4])