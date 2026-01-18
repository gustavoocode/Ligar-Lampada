var btnlampadaDesligada = document.getElementById("lampadaDesligada");
var btnlamapdaligada = document.getElementById("lampadaLigada");

var lampada = document.getElementById("lampada")

btnlamapdaligada.addEventListener("click", function (){
    lampada.src = "imagens/Lampada Acesa.png"
})

btnlampadaDesligada.addEventListener("click", function (){
    lampada.src = "imagens/Lampada Apagada.png"
})