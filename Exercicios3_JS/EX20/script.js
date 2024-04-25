/* 20) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor usando o loop "do-while". */

let numero = parseInt(prompt("Digite um número"))
let contadora = 1

do{
    contadora++
    document.write( numero + " X " + contadora + " = " + numero*contadora + "<br />")
}while(contadora<=10)