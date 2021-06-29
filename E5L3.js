/*
Para o seguinte programa, será necessário:
* criar duas váriaveis, uma para ser o múltiplicador e a outra para receber o número do usuário
* informar para o usuário que quando o número digitado ser 0, o programa termina, e que ele deve digitar o número
* criar o loop, enquanto o número for diferente de 0, múltiplicar o número digitado pelo próximo digitado e assim sucessivamente
* mostrar o resultado da multiplicação sempre 
*/
var readLineSync = require("readline-sync")
let p = 1

console.log("Para terminar o programa, digite 0")
console.log("diga o número e eu multiplicarei pelo próximo que digitar infinitamente. ")
do {
    console.log("número: ")
    n = readLineSync.questionFloat()
    if (n!=0){
        p = p*n
        console.log(p)
    }
}
while(n!=0)