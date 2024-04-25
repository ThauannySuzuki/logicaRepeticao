/* 34) Faça um programa que leia 5 números inteiros e exiba a média aritmética dos valores lidos. */

let armazena = 0

for(let contadora = 0; contadora<=5; contadora ++){
    prompt("Digite um número.")
    armazena+=contadora
}
let media = armazena/5
document.write("A média é: " + media)
