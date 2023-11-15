/*colección de datos que están relacionados entre si*/
let mapa = new Map()
mapa.set("nombre", "Fab")
mapa.set("apellido", "Cossio")
mapa.set("edad", 24)

console.log(mapa.size)
console.log(mapa.has("correo"))
console.log(mapa.has("edad"))
mapa.set("nombre", "Fabrizio Cossío")
console.log(mapa.get("nombre"))
mapa.delete("apellido")

mapa.set(19, "diecinueve")
mapa.set(false, "falso")
mapa.set({}, {})
console.log(mapa)

for(let [key, value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`)
}

const mapa2 = new Map([
    ["Nombre", "Fabrizio"],
    ["edad", 45],
    ["hobbies", ["comer", "estudiar"]]
])

const llaves = [...mapa2.keys()] 
const valores = [...mapa2.values()]
console.log(mapa2)
console.log(llaves)
console.log(valores)



