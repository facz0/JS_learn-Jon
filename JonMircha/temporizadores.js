//SetTimeouit se ejecuta después de una x cantidad de tiempo y solo se ejecuta una vez después de haber sido llamada.
setTimeout(() => {
    console.log("ejecutando un setTimeout, esto se ejecuta solo una vez")
}, 3000)

//SetInterval
setInterval(() => {
    console.log("Esto se ejecuta indefinidamente cada cierto intervalo de tiempo")
}, 2000)

