/*
Para esse programa será necessário:
* criar variavel número (num) e a variavel div (contador de divisores)
* criar laço for: (i (contador) recebe 0; enquanto i for menor ou igual a num; i recebe i + 1)
criar condicional: se (num % ifor igual a 0) div recebe div + 1
fim do laço
* criar condição: se (div for diferente de 2) informar que num não é primo
* criar condição: se (div for igual a 2) informar que num é primo
*/ 

let leia = require("readline-sync")
console.log("Digite um número")
num = leia.questionInt()
div = 0
for (i = 0; i <= num; i++){
    if (num % i == 0){
        div++
    }
}
if (div != 2){
    console.log("Não é primo.")
}
else if (div == 2){
    console.log("É primo.")
}