// 1° passo: criar um array contendo os 15 números
// 2° passo: criar duas variaveis para o maior e menor número (n1 para maior e n2 para menor)
// 3° passo: criar o loop para ler o valor dos 15 números
// 4° passo: definir o valor do menor e maior como o primeiro número do array em forma de condição caso i = 0
// 5° passo: criar uma condicional para caso o num[i] for maior que n1, definir n1 como num[i]
// 6° passo: criar uma condicional para caso o num[i] for menor que n2, definir n2 como num[i]
// 7° passo: informar o maior e o menor número

let num = [1,3,3,5,5,6,7,4,9,60,11,12,13,14,15]
let n1 = 0
let n2 = 0
for (i = 0; i < num.length; i++){
    if (i == 0){
        n1 = n2 = num[i]
    }
    else {
        if (num[i] > n1){
            n1 = num[i]
        }
        if (num[i] < n2){
            n2 = num[i]
        }
    }

}
console.log("o maior número é: "+n1+" e o menor é: "+n2)