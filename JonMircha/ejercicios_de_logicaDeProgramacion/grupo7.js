//ejercicio 1
const alCuadrado = (nums = []) =>{
    return nums.map(num => num * num);
}
alCuadrado([1,4,5])

/*****************************************************/
const alCuadrado2 = (numbers = []) =>{
    numbers.forEach(item => {
        let resultado = item*item;
    })
    return numbers
}

alCuadrado2([1,4,5])
/*****************************************************/


//ejercicio 2
const orden = (mayorMenor = []) =>{
    let mayor = Math.max(...mayorMenor)
    let menor = Math.min(...mayorMenor)

    return console.info(`Elmayor es ${mayor} y el menor es ${menor}`)

} 
orden([1,2,5,7,44,5,6])
/*************************************************************************/
const orden2 = (maxMin = []) =>{
    let smaller = maxMin[0]
    let bigger = maxMin[0]

    for(let i = 0; i < maxMin.length; i++){
        if(maxMin[i] < smaller){
            smaller = maxMin[i]
        }
        if(maxMin[i] > bigger){
            bigger = maxMin[i]
        }
    }
    return console.info(`Elmayor es ${bigger} y el menor es ${smaller}`)
}
orden2([-3,6,44,65,3,890,20])
/*************************************************************************/

const clasificar = (lista = []) => {
    let pares = []
    let impares = []

    for (let i = 0; i < lista.length; i++){
        if(i % 2 === 0){
            pares.push(lista[i]);
        }
    }
}