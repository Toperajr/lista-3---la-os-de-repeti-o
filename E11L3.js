/*
Para esse programa será necessário:
* criar 3 variaveis, uma para o número, outra para a soma dos pares (par) e outra para a soma dos impares (imp), todas com valor 0
* criar laço while, enquanto número for menor que 1000: 
ler o número (num)
criar condição: se num <= que 1000 e num % 2 for igual a 0, par recebe num + par
criar condição: se num <= que 1000 e num % 2 for diferente de 0, imp recebe num + imp
* mostrar a soma de impares e de pares
*/

let leia = require("readline-Sync")
let par = 0
let imp = 0
let num = 0
while(num <= 1000){
    console.log("Digite o número")
    num = leia.questionInt()
    if (num <= 1000 && num % 2 == 0){
        par += num
    }
    if (num <= 1000 && num % 2 != 0){
        imp += num
    }
}
console.log("Soma dos números impares: "+imp)
console.log("A soma dos números pares: "+par)
