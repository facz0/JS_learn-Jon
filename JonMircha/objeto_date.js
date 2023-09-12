//Objeto Date
console.log(Date())
let fecha = new Date()
console.log(fecha)
//día delmes
console.log(fecha.getDate())
//día de la semana DLMMJVS -> 0123456
console.log(fecha.getDay())
//obtener mes
console.log(fecha.getMonth()+1) // inicia en el mes 0 = enero, por eso pongo +1
//obtener año
console.log(fecha.getFullYear())
//obtener la hora
console.log(fecha.getHours())
//obtener los minutos
console.log(fecha.getMinutes())
//obtener los segundos
console.log(fecha.getSeconds())
//
console.log(fecha.toString())
//
console.log(fecha.toDateString())
//
console.log(fecha.toLocaleString())
//
console.log(fecha.toLocaleDateString())
//
console.log(fecha.toLocaleTimeString())



//RELOJ DIGITAL EN TIEMPO REAL:

//let parrafo = document.getElementById("p")
//function reloj(){
//    
//    let horaActual=new Date();
//    let hora = horaActual.getHours()
//    let min = horaActual.getMinutes()
//    let sec = horaActual.getSeconds()
//    if(sec <10){
//        sec = `0${sec}`
//    }
//    parrafo.innerHTML=`${hora}:${min}:${sec}`
//}
//setInterval(reloj, 1000)

