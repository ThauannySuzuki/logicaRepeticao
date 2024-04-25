/* 19) Faça um programa que leia 5 números inteiros usando o loop "do-while" e exiba a média aritmética dos valores lidos. */

let numero = parseInt(prompt("Digite um número"))
let contadora = 1


do{
    document.write( numero + " X " + contadora + " = " + numero*contadora + "<br />")
    contadora++
}while(contadora<=10)