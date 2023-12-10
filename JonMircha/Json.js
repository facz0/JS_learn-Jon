const json = {
    cadena: "Json",
    numero: 25,
    booleano: true,
    arreglo: [1, 2, 3, 4, 5],
    objeto: {
        nombre: "Juan",
        edad: 34
    },
    nulo: null
}

console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3,4]"))