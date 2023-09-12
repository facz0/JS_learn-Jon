//ejercicio 1
const invertir = (cadena ="") => {
    console.info(cadena.split("").reverse().join(""))
}
invertir("Hola Mundo")

//ejercicio 2
const encontrar = (cadena2 = "", texto = "") => {
    if(!cadena2) return console.warn("no ingresaste un texto largo") 
    if(!texto) return console.warn("No ingresaste la palabra a evaluar")

    let i = 0
    contador = 0
    
    while(i !== -1){
        i = cadena2.indexOf(texto, i)
        if(i !==-1){
            i++
            contador++
        }   
    }
    return console.info(`La palabra ${texto} se repite ${contador} veces`)
}

encontrar("hola mundo adios mundo","mundo")




//ejercicio 3
function esPalindromo(cadena4 = "") {
    //con split lo convertimos en array, con reverse camniamos el orden del array y con join lo convertimos a cadena
    let reverseCadena = cadena4.split("").reverse().join("")
    if(reverseCadena === cadena4){
        console.info(`${cadena4} si es palíndromo`)
    } else {
        console.info(`${cadena4} no es palíndromo`)   
    }
}

esPalindromo("cacadacac")


//ejercicio 4
const eliminarCaracteres = (texto = "",patron = "") =>
(!texto) 
    ? console.warn("no ingresaste el texto") 
    : (!patron) 
        ? console.warn("no ingresaste el patrón de caracteres") 
        : console.info(texto.replace(new RegExp(patron, "ig"), ""))

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4, xyz5", "xyz")