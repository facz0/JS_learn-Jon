// Funciones anónimas autoejecutables

(function (){
    console.log("mi primer IIFE")
})();

(function (d,w,c){
    console.log("mi segunda IIFE")
    console.log(d)
    console.log(w)
    c.log("este es un console.log")
})(document, window, console);
