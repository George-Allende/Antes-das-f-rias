/*
////////////////////////////////////////////////////////////////
  _      ______ _____                     ____  _    _ _____ 
 | |    |  ____|_   _|   /\         /\   / __ \| |  | |_   _|
 | |    | |__    | |    /  \       /  \ | |  | | |  | | | |  
 | |    |  __|   | |   / /\ \     / /\ \| |  | | |  | | | |  
 | |____| |____ _| |_ / ____ \   / ____ \ |__| | |__| |_| |_ 
 |______|______|_____/_/    \_\ /_/    \_\___\_\\____/|_____|
                                                             
 ////////////////////////////////////////////////////////////////

INSTRUÇÕES PARA AS ATIVIDADES

Ao pedir números vindo de um prompt, utilize Number() antes, e insira o prompt dentro dos parênteses. Por Exemplo:

exemplo = Number(prompt("Digite um número como exemplo:"))

Rode um código por vez. Quando testar e estiver tudo certo,
comente o código igual essas questões, utilizando /* e */




/*
1. Classificação Etária
Contexto: Um cartógrafo precisa classificar uma pessoa por faixa etária.

Instrução: Solicite ao usuário a idade e informe a faixa etária correspondente.

Saídas Possíveis:
 <= 12 "Você é uma criança."
 <= 17"Você é um adolescente."
 <= 59"Você é um adulto."
 <= acima"Você é um idoso."

EXIBA NO CONSOLE COM console.log
*/
console.log("\n Exercício 1 \n")
//Escreva seu código abaixo
/*
let idade 

idade = prompt("Digite sua idade")


if (idade <=0 ){
  alert("idade invalida")
}
else if(idade<=12){
  alert("Você é uma criança.")
}
else if(idade <= 17){
  alert("você é um adolecente")
}
else if (idade <= 59 ){
  alert ("você é um adulto")
}

else{
  alert("Você é um idoso")
}
*/

/*
2. Cálculo de Média
Contexto: Um usuário precisa calcular a média de três notas.

Instrução: Solicite ao usuário três notas e calcule a média.

EXIBA NO CONSOLE COM console.log

*/
console.log("\n Exercício 2 \n")
//Escreva seu código abaixo
/*let nota1
let nota2
let nota3
let media
nota1 = Number (prompt("Digite uma nota"))
nota2 = Number (prompt("Digite uma nota"))
nota3 = Number (prompt("Digite uma nota"))
media = (nota1 + nota2 + nota3) /3
console.log ("A media é: " + media)
*/

/*
3. Soma de Números
Contexto: Um enigma requer a soma de uma sequência de números.

Instrução: Solicite ao usuário um número `n` e calcule a soma de todos os números de 1 até `n`.

EXIBA NO CONSOLE COM console.log

*/

/*
console.log("\n Exercício 3 \n")

let n
let contador = 1
let soma = 0

n = Number(prompt("Digite um número :"))
for(contador; contador <= n; contador++){
  soma = soma + contador
  console.log(soma)
}
*/
/*
4. Tabuada
Contexto: Um usuário precisa calcular a tabuada de um número.

Instrução: Solicite ao usuário um número e exiba a tabuada desse número de 1 até ele mesmo.

Exemplo: Se o número que o usuário informou foi 5:

EXIBA ASSIM NO CONSOLE COM console.log

Tabuada de 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25

*/
console.log("\n Exercício 4 \n")
//Escreva seu código abaixo

let contador 
let num = 5
let mult
let rep

rep = Number(prompt("Digite quantas vezer você quer que repita as muntiplicações"))
num = Number (prompt("Digite um numero"))
for(contador = 1;contador <= rep ;contador++){
mult = num * contador

  alert(mult)
 console.log(contador + " X " + num + " = " + mult) 
}
