/*
Para o seguinte programa será necessário: 
*criar um loop for, nele será criado a variavel i, o loop continua enquanto i for menor que 2000, será somado 1 ao i toda vez que o loop reiniciar
*criar condição no loop for para mostrar i caso o resto de i por 11 seja igual a 5
*/

for (i = 1000; i < 2000; i++){
    if(i % 11 === 5){
        console.log("ACHEI UM!! É O: "+i)
    }
}