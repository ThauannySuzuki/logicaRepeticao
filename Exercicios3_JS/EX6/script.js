/* 6) Crie um programa que leia um número inteiro positivo e exiba todos os divisores desse número usando o loop "while". */


let numero;
let divisores = [];

while (true) {
    numero = prompt("Digite um número inteiro positivo:");
    numero = parseInt(numero);

    if (!isNaN(numero) && numero > 0) {
        break;
    } else {
        alert("Número NÃO válido.");
    }
}

let divisor = 1;

while (divisor <= numero) {
    if (numero % divisor === 0) {
        divisores.push(divisor);}
    divisor++;
}
let mensagem = "Divisores de " + numero + "\n";
mensagem += divisores.join(", "); // para juntar os divisores em uma string separada por vírgula

alert(mensagem);
