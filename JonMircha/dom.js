// console.log(document.getElementsByTagName("li"))
// console.log(document.getElementsByClassName("card"))
// console.log(document.getElementsByName("nombre"))
// --->
console.log(document.querySelectorAll("a"))
console.log(document.querySelector(".card"))
console.log(document.getElementById("menu"))

console.log(document.documentElement.lang)
console.log(document.documentElement.getAttribute("lang"))
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))

//los SETeadores...
document.documentElement.lang = "es"
console.log(document.documentElement.lang)
document.documentElement.setAttribute("lang", "es-PR")
console.log(document.documentElement.lang)

//variables que guardenelementos del DOM se declaran con el símbolo "$"
const $linkDOM = document.querySelector(".link-dom")
$linkDOM.setAttribute("target","_blank")
$linkDOM.setAttribute("rel","noopener")
$linkDOM.setAttribute("href","https://google.com")
console.log($linkDOM.hasAttribute("rel"))
$linkDOM.removeAttribute("rel")
console.log($linkDOM.hasAttribute("rel"))

//Data-Attributes
console.log($linkDOM.getAttribute("data-description"))
console.log($linkDOM.dataset.description)
$linkDOM.setAttribute("data-description","Modelo de Objeto del  Documento")
console.log($linkDOM.dataset.description)
$linkDOM.dataset.description = "suscríbete a mi canal y comparte"
console.log($linkDOM.dataset.description)
