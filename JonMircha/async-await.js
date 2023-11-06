function cuadradopromise(value) {
    if(typeof value !== "number") return Promise.reject(
        `El valor "${value}" ingresado no es un número`
    )
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            })
        }, 0 | Math.random()*1000)
    })
}

async function funcionasincrona(){
    try {
        console.log("inicio async function")
        let obj = await cuadradopromise(0)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradopromise(1)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradopromise(2)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradopromise(true)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)

        obj = await cuadradopromise(4)
        console.log(`Async Function: ${obj.value}, ${obj.result}`)
        console.log("fin async function")
    } catch(err){
        console.error("no ingrasaste un número")
    } 
}

funcionasincrona();

