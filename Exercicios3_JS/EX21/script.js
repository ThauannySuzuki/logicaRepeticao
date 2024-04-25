/* 21) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "do-while". */

let numero = parseInt(prompt("Digite um número:"))
let divisores = []
let divisor = 1;

do{
    if (numero % divisor === 0) {
        divisores.push(divisor);}
    divisor++;
}while (divisor <= numero) 
let mensagem = "Divisores de " + numero + "\n";
mensagem += divisores.join(", "); // para juntar os divisores em uma string separada por vírgula

alert(mensagem);
