/* 8) Escreva um programa que leia um número inteiro e exiba a sequência de Fibonacci até o número lido usando o loop "while". */

let contadora = parseInt(prompt("Digite um número"))

let soma = 0
let anterior = 0
let proximo = 1 

let ind = 0 
while(ind < contadora){
    ind ++
    soma = anterior + proximo 
    anterior = proximo
}

document.write("A sequencia fibonacci do " + contadora + "é = " + anterior )