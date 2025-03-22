var setaEsquerda = window.document.getElementById("seta_esquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setaDireita = window.document.getElementById("seta_direita")

function RolarParaDireita(){
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style ="display:flex; margin-top:35%"
    setaDireita.style ="display:none"
}

function RolarParaEsquerda(){
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex; margin-top:35%"
}