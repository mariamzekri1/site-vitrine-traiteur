const titreSpans=document.querySelectorAll('h1 span');
const l1=document.querySelectorAll('.l1');
const l2=document.querySelectorAll('.l2');

window.addEventListener('load',() =>{
    const TL =gsap.timeline({paused: true});
    TL.staggerFrom(titreSpans,1, {top:-50, opacity: 0, ease:"power2.out"},0.3)
    TL.play();
})
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