var btnlampadaDesligada = document.getElementById("lampadaDesligada");
var btnlamapdaligada = document.getElementById("lampadaLigada");

var lampada = document.getElementById("lampada")

btnlamapdaligada.addEventListener("click", function (){
    lampada.src = "imagens/Lampada-acesa.png"
})

btnlampadaDesligada.addEventListener("click", function (){
    lampada.src = "imagens/Lampada-apagada.png"
})