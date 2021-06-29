// 1° passo: criar variavel som (soma total dos números impares)
// 2° passo: informar que a soma dará:
// 3° passo: criar laço for: (i (contador) recebe 1; enquanto i for menor ou igual a 500; i recebe i + 1)
/*
criar condicional: se (i % 3 for igual a 0 e i % 2 for diferente de 0) som recebe som + i e escreve "i +"
fim do laço
*/
// 4° passo: escrever som


som = 0
console.log("A soma de:")
for (i = 1; i <= 500; i++){
    if (i % 3 == 0 && i % 2 != 0){
        som += i
        console.log(i+" +")
    }
}
console.log("Dará: "+ som)