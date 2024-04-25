/* 7) Faça um programa que leia um número inteiro e exiba se ele é um número primo usando o loop "while". */

let numero;
let divisor=2

while (true) {
    numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (!isNaN(numero) && numero > 0) {
        break;
    } else {
        alert("Número NÃO válido.");
    }
}
while (true) {
    if(numero%divisor==0 && numero%divisor==0){
        alert("NÃO É PRIMO")
        break;
    }
    else{
        alert(" É PRIMO")
    }
}
