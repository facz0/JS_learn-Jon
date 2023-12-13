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

//El .parse es para que se imprima el tipo de texto como tal escrito en formato cadena de texto
console.log(JSON.parse("{}"))
console.log(JSON.parse("[1,2,3,4]"))
console.log(JSON.parse("true"))
console.log(JSON.parse("19"))

//El .stringify convierte un tipo de dato a una cadena de texto
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3,4]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2,y:4}));