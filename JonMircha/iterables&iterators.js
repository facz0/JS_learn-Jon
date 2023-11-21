const iterable = [1,2,3,4,5]
//accedemos al iterador iterable
const iterador = iterable[Symbol.iterator]()
console.log(iterable)
console.log(iterador)
let next = iterador.next()

while (next.done == false){
    console.log(next.value)
    next = iterador.next()
}





