function cuadradopromise(value) {
    if(typeof value !== "number") {return Promise.reject(
        `El valor "${value}" ingresado no es un número`
    )}
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random()*1000)
    })
}

cuadradopromise(0)
.then((obj) => {
    console.log("inicio de promesa")
    console.log(`Promesa: ${obj.value}, ${obj.result}`)
    return cuadradopromise(1)
})
.then(obj => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`)
    return cuadradopromise(2)
})
.then(obj => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`)
    return cuadradopromise(3)
})
.then(obj => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`)
    return cuadradopromise(true)
})
.then(obj => {
    console.log(`Promesa: ${obj.value}, ${obj.result}`)
    return cuadradopromise(5)
}).then(obj => {
    return console.log("FIN de promesa")
})
.catch(err => {console.error(err)})


