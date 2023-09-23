//ejercicio 1
const find = (texto) => {
    if(typeof texto !== "string") return console.warn("Ingresa un texto válido por favor")
    let contadorVocales = 0
    let contadorConsonantes = 0
    let vocales = ["a","á","e","é","i","í","o","ó","u","ú","A","E","I","O","U"]
    let consonantes = ["b","B","c","C","d","D","f","F","g","G","h","H","j","J",
    "k","K","l","L","m","M","n","N","ñ","Ñ","p","P","q","Q","r","R","s","S","t","T","v","V","w",
    "W","x","X","y","Y","z","Z"]

    for(let i = 0; i < texto.length; i++){
        /*texto[i]  hace referecia al número de posición "i" dentro de texto. Se utiliza para comparar 
        cada carácter del texto con las vocales y consonantes definidas en las variables vocales y consonantes*/
        if(vocales.indexOf(texto[i]) !== -1){
            contadorVocales++
        } else if(consonantes.indexOf(texto[i]) !== -1){
            contadorConsonantes++
        }
    }

    return console.info(`Vocales: ${contadorVocales}, Consonantes: ${contadorConsonantes}`)
}

find("Hola quiero ir a ver gran Turismo de nuevo")

//ejercicio 2

