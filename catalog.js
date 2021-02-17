var slide = new Array("Capture d'écran(130).png", "Capture d'écran(131).png","Capture d'écran(134).png" , "Capture d'écran(133).png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
