const numeros = ["-85, 5, 29, 54, 35"]

let contador = 0

let maiornum = numeros[1]
                                      
while(contador < numeros.length){
if (numeros[contador] > maiornum){
maiornum = numeros[contador]
}
contador++
 console.log("Maior num é " + maiornum)
}