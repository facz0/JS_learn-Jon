const persona = {
    nombre: "",
    apellido: "",
    edad: 0,
}

const manejador = {
    set(obj, prop, valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} 
            no existe en el objeto persona`)
        }
        if(
            (prop === "nombre" || prop === "apellido") &&
            !(/^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(valor))
        ){
            return console.error(`La propiedad "${prop}" solo acepta letras y espacios en blanco`)
        }
        obj[prop] = valor
    }
}

const fab = new Proxy(persona, manejador)
fab.nombre = "fabrizio657"
fab.apellido = "cossío"
fab.edad = 24
fab.instagram = "fabriziocossio99"
console.log(fab) 








