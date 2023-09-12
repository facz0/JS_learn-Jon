// arrays
const b = [1, true, "hola", [1, 2, 3]];
console.log(b)
console.log(b.length)
console.log(b[3]) //imprime la posición 3

const d = Array(10).fill("hola")
console.log(d)

const c = Array.of(1, 2, 3, 4, 5)
console.log(c)
//agregar nuevo elemento al final
c.push(78)
console.log(c)
//quitar ultimo elemento
c.pop()
console.log(c)

c.forEach(function(el){
    console.log(`<li>${el}</li>`)
})



