const simple = (tarea) => console.log(tarea)
const pesada = (tarea) => {
    console.log(`Empezando Tarea ${tarea}...`)
    for (let i=0; i<200000;i++){
        Math.random() - Math.random() * Math.random()
    }
    console.log(`Tarea ${tarea} terminada`)
}
const tareaPablo = (tarea, callback, tiempo) => {
    console.log(tarea)
    setTimeout(callback, tiempo)
}

const tareas = [
    () => simple("escribir guión"),
    () => tareaPablo("hacer miniatura", () => simple("-> Revisar miniatura"), 10000),
    () => pesada("grabar video"),
    () => tareaPablo("editar video", () => simple("-> Publicar video"), 10)

]

for(let tarea of tareas) tarea()