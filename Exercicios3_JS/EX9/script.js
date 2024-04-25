/* 9) Crie um programa que leia o nome e a idade de 5 pessoas usando o loop "while" e exiba a média das idades. */

let contadora = 1
let armazena = 0

while(contadora<=5){
    let idade = parseInt(prompt("Digite uma idade."))
    armazena+=idade
    contadora++

}
document.write("A média é: " +  armazena/5)


