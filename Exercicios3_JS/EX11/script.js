/* 11) Escreva um programa que leia um número inteiro e exiba a soma de todos os números pares entre 1 e o número lido usando o loop "while". */

let numero = parseInt(prompt("Diigite um número"))
let contadora = 2   
let pares = []
while(contadora <=numero){
    if(numero % contadora ==0){
    pares.push(contadora);}
     contadora++
}
let mensagem = "Os numeros pares de 1 até " + numero + "\n";
mensagem += pares.join(", "); // para juntar os divisores em uma string separada por vírgula

document.write(mensagem);


