
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

