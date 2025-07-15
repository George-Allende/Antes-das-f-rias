const numAltura = parseFloat(prompt("Quantas alturas você vai cadastrar?"))
let alturas = []
let soma = 0
for (let i = 0; i < numAltura; i++ ){
    let altura = Number(prompt(`Digite a ${i+1}° altura; `));
    alturas [i] = altura;
    soma = soma + altura;
}
let media = soma/numAltura;
alert(`A média das alturas foi: ${media}`)