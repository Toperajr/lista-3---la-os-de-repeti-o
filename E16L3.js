// 1° passo: criar a variavel num (número a ser lido para servir de limite)
// 2° passo: criar a variavel a (segundo contador)
// 3° passo: criar laço for: (i (contador ) recebe 0; enquanto i for menor ou igual a num; i recebe i + 1)
/*
criar variavel b = 0 (quantidade de divisores)    
    criar laço for: (a recebe 0; enquanto a for menor ou igual a i; a recebe a + 1)
        criar condicional: se (i % a for igual a 0) b recebe b + 1
    fim do laço
criar condicional: se (b for igual a 2) informar que i é primo
criar condicional: se (b for diferente de 2) informar que i não é primo
*/

let leia = require("readline-sync")
console.log("Digite um número")
num = leia.questionInt()
let a = 0

for (i = 0; i <= num; i++){
    b = 0
    for (a = 0; a <= i; a++){
        if (i % a == 0){
            b++
        }
    }
    if (b == 02){
        console.log("O número "+i+" é primo")
    }
    else if (b != 2){
        console.log("O número "+i+" não é primo")
    }
}
