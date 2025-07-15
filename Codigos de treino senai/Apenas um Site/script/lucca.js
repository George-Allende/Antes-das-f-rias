const jogos = ["Minecraft", "hollow knight", "Terraria", "raft", "the forest"]

console.log(jogos)
function inserirFinalArray(){
    var novoJogos = prompt("Digite um jogo")
    jogos.push(novoJogos)
    console.log(novoJogos)
    alert(jogos.length)
}
 function inserirInicioArray(){
    var novoJogos = prompt("Digite um jogo")
    jogos.unshift(novoJogos)
    console.log(novoJogos)
    alert(jogos.length)

 }
 function RemoverFinalArray(){
    var novoJogos
    jogos.pop(novoJogos)
    console.log(novoJogos)
    alert(jogos.length)
 }
 function RemoverInicioArray(){
    var novoJogos
    jogos.shift(novoJogos)
    console.log(novoJogos)
    alert(jogos.length)
 }
function listagemconsole(){
 for(i = 0 ; i<jogos.length; i++){
    jogo = jogos[i]
    console.log (jogo)
 }
}

function loop(){
     for(i = 0 ; i<jogos.length; i++){
        jogo=jogos[i]
    alert("Você comprou " + jogo)
   
    console.log (jogo)
 }
 alert( "Compra finalizada.")
}

function Substitui(){
    var posicao = prompt("Digite a posição que deseja substituir")
    var jogo = prompt("Digite um novo jogo")
    jogos [posicao] = jogo
    console.log(jogo)
}
 