/* 5) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "while". */

let numero = parseInt(prompt("Digite um número"))
let contadora = 1

while(contadora<=10){
    document.write( numero + " X " + contadora + " = " + numero*contadora + "<br />")
    contadora++
}