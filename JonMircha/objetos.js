// objetos
// lo mejor es usar const para inicializar un objeto

const fab = {
    nombre: "Fabrizio",
    apellido: "Cossío",
    edad: 23,
    pasatiempos: ["ejercicio", "estudiar", "comer"],
    soltero: false,
    contacto: {
        email: "fab@gmail.com",
        facebook: "FabCos",
        movil: "123456789"
    },
    saludar: function(){
        console.log("hola :)")
    }
}

console.log(fab)
//acceder a los valores del objeto
console.log(fab["nombre"])
console.log(fab["apellido"])
//mejor es usar lo métodos con puntos
console.log(fab.contacto)
console.log(fab.soltero)
console.log(fab.pasatiempos[1])
fab.saludar()




