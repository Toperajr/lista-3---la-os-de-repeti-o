/*
Para o seguinte programa será necessário:
* declarar uma variavel que receberá o multiplicador (valor inicial 0)
* receber um valor do usuário (vulgo número a ser multiplicado, será chamado de n)
* criar condição que classificará o número como positivo ou não (condição: se o número ser menor ou igual a 0 o programa termina)
* criar o loop com condições para classificar número como perfeito ou não: 
será criado indice (i) que aumentará constantemente 1, o loop termina quando o indice chegar a um valor menor que n  
* criar condição no loop, se a sobra da divisão de n por i ser 0, o número é acrescentado ao multiplicador
se ao fim o multiplicador der igual a n, o número é perfeito, caso contrário não é perfeito
* indicar ao usuário se o número é perfeito ou não
*/

var readLineSync = require("readline-sync")

s = 0
console.log("digite um número positivo e inteiro e eu lhe direi se ele é perfeito: ")
n = readLineSync.questionInt()

if (n <= 0){
    console.log("EU FALEI PARA SER POSITIVO, CRIATURA DE DEUS")
}
for (i = 1; i < n; i++){
    if (n % i == 0 ){
        s = s + i
    }
  
}  
if (n == s){
        console.log("Parabéns parceiro, é um número perfeito.")
    }
else if (n != s){
        console.log("Foi mal filhão, o número é imperfeito")
    }