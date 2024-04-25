/* 38) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido.*/

let contadora = parseInt(prompt("Digite um número"))

let soma = 0
let anterior = 0
let proximo = 1 

for(let ind = 0 ;ind < contadora; ind ++){
    soma = anterior + proximo 
    anterior = proximo
}

document.write("A sequencia fibonacci do " + contadora + "é = " + anterior )