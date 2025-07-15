let carros1 = {
    marca: "BMW",
    cor: "Preto",
    ano: "2024",
    ligar: function () {
        console.log("Vrum!")

    }
}
let carros2 = {
    marca: "Ford",
    cor: "cinza",
    ano: "2025",
    ligar: function () {
        console.log("Vrum!")

    }
}
let carros3 = {
    marca: "Nissan",
    cor: "amarelo",
    ano: "2023",
    ligar: function () {
        console.log("Vrum!")

    }
}
const carros = [carros1, carros2, carros3]
/*for (let i = 0; i < carros.length; i++) {
    console.log(carros[i].marca)
}*/
for (let carro of carros) {
    for (let chave in carro)
        console.log(chave, " : ", carro[chave])
    }