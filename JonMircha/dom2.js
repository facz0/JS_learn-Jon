
console.log($linkDOM.style)
console.log($linkDOM.getAttribute("style"))
console.log($linkDOM.style.backgroundColor)
console.log(window.getComputedStyle($linkDOM))
console.log(getComputedStyle($linkDOM).getPropertyValue("color"))

//SETear
$linkDOM.style.setProperty("text-decoration","none")
$linkDOM.style.setProperty("display","block")
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.borderRadius = "5rem"

//variables CSS - Custom properties CSS
const $html = document.documentElement
const $body = document.body
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

console.log(varYellowColor,varDarkColor)

$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

//modificar variables
$html.style.setProperty("--dark-color","grey")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
$body.style.setProperty("background-color",varDarkColor)

//CLASES CSS
const $card = document.querySelector(".card")
console.log($card)
console.log($card.className)
console.log($card.classList)
console.log($card.classList.contains("rotate-45"))
/*añadir otra calse mas al elemento que tiene la clase card*/
$card.classList.add("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.remove("rotate-45")
/*añade la clase si es que el elemento no la tiene*/
$card.classList.toggle("rotate-45")
/*quitamos la clase repitiendo el toggle*/
$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45"))
$card.classList.toggle("rotate-45")
/*reemplaza la clase 2da por la 1era*/
$card.classList.replace("rotate-45", "rotate-135")
$card.classList.add("opacity-80", "sepia")
/*removemos*/
$card.classList.remove("opacity-80", "sepia")
/*añadimos de nuevo*/
$card.classList.toggle("opacity-80", "sepia")


