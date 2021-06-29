// 1° passo: criar duas variaveis: men = 0 e mai = 0 (men para menor altura e mai para maior altura)
// 2° passo: criar laço for: (i (contador) recebe 1; enquato i for menor ou igual a 15; i recebe i + 1)
/*
criar variavel: al (altura a ser lida)
criar condicional: se (i for igual a 1) men recebe mai que recebe al
criar condicional: se (al for maior que mai) mai recebe al
criar condicional: se (al for menor que men) men recebe al
*/
// 3° passo: escrever a menor e a maior altura

let leia = require("readline-sync")
men = 0
mai = 0
for (i = 1; i <= 15; i++){
    console.log("Insira a altura: ")
    al = leia.questionFloat()
    if(i == 1){
        men = mai = al
    }
    if(al > mai){
        mai = al
    }
    if(al < men){
        men = al
    }
} 
console.log("A maior altura foi: "+mai+" e a menor foi: "+men)