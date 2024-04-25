/* 37) Faça um programa que leia um número inteiro e exiba se ele é um número primo. */

let numero;
let divisor=2

do{
    numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);
    if(numero%divisor==0 && numero%divisor==0){
        alert("NÃO É PRIMO")
        break;
    }
    else{
        alert(" É PRIMO")
    }
}while(true)