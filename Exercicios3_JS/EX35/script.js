/* 35) Escreva um programa que leia um número inteiro e exiba a tabuada desse número até o décimo valor. */

let numero = parseInt(prompt("Digite um número"))

for(let contadora = 1; contadora<=10;contadora++){
    document.write( numero + " X " + contadora + " = " + numero*contadora + "<br />")
}