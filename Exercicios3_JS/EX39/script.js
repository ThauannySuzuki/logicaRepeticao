/* 
39) Crie um programa que leia o nome e a idade de 5 pessoas e exiba a média das idades.
 */

let armazena = 0

for(let contadora = 1; contadora<=5;contadora++){
    let idade = parseInt(prompt("Digite uma idade."))
    armazena+=idade

}
document.write("A média é: " +  armazena/5)