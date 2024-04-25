/* 24) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "do-while" e exiba a média das idades. */

let contadora = 1
let armazena = 0

do{
    let idade = parseInt(prompt("Digite uma idade."))
    armazena+=idade
    contadora++
}while(contadora<=5)
document.write("A média é: " +  armazena/5)