const set = new Set([1,2,3,3,4,true,true,"hola","HOLA"])
console.log(set)
/*cantidad de elementos de un set*/
console.log(set.size)

const set2 = new Set()
/*añadir elementos a un set*/
set2.add(1)
set2.add(2)
set2.add(3)
set2.add("Hola")
set2.add({nombre:"Juan"})

console.log(set2)
console.log(set2.size)
console.log("recorriendfo set")
for(item of set){
    console.log(item)
}
console.log("recorriendfo set 2")
set2.forEach(item => console.log(item))
/*Convirtiendo set en array para llegar a un elemento*/
let arr = Array.from(set)
console.log(arr[1]) 
/*Eliminar elementos de un set*/
set.delete("HOLA")
console.log(set)
/*Validar si existe el elemento en el set*/
console.log(set.has("hola"))
console.log(set.has(19))
/*Elimina los elementos del set*/
set2.clear()
console.log(set2)