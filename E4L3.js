// 1° passo: ler o numerador e atribuir valor -1
// 2° passo: ler a soma e atribuir valor 0
// 3° passo: criar o loop, dentro da condição, definir o denominador igual a 1, repetindo enquanto o denominador for menor que 51 e adicionando ele + 1 todo reinicio
// 4° passo: dentro do loop adicionar ao numerador + 2
// 5° passo: somar a soma mais a divisão e informar em qual estado do loop a divisão está
// 6° passo: informar a soma total

let num = -1
let som = 0
for (den = 1; den < 51; den++){
    num = num+2
    som = som + (num/den)
    console.log(num+"/"+den+"+\n")
}
console.log("O resultado é: "+som)