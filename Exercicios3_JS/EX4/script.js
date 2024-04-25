/* 4) Faça um programa que leia 5 números inteiros usando o loop "while" e exiba a média aritmética dos valores lidos. */

let contadora = 0
let armazena = 0

while(contadora<=5){
    prompt("Digite um número.")
    contadora ++
    armazena+=contadora
}
let media = armazena/5
document.write("A média é: " + media)

