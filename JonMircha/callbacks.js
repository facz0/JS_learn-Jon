function cuadradocallback(value, callback) {
    setTimeout(() => {
        callback(value, value*value)
    }, 0 | Math.random() * 1000)
}

cuadradocallback(0, (value, result) => {
    console.log("inicia callback")
    console.log(`Callback: ${value, result}`)
    cuadradocallback(1, (value, result) =>{
        console.log(`Callback: ${value}, ${result}`)
        cuadradocallback(2, (value, result) =>{
            console.log(`Callback: ${value}, ${result}`)
            cuadradocallback(3, (value, result) =>{
                console.log(`Callback: ${value}, ${result}`)
                console.log("fin del callback")
            })
        })
    })
})

