let aleatorio = Math.round(Math.random()*100 + 5)
const objUsuarios = {
    //PROPIEDAD COMÚN
    propiedad: "Valor",
    //PROPIEDAD DINÁMICA
    [`id_${aleatorio}`]: "valor aleatorio"
}
console.log(objUsuarios)
const usuarios = ["Jon","Irma","Miguel","Kala"]

usuarios.forEach((usuario, index) => objUsuarios[`id_${index}`] = usuario)

console.log(objUsuarios)



