/* 15) Crie um programa que leia o nome e a idade de várias pessoas usando o loop "while" até que o nome "fim" seja informado. Ao final, exiba a média das idades. */


let somaIdades = 0;
let contadorPessoas = 0;
let nome = "";

while (nome !== "fim") {
    nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

    if (nome === "fim") {
        break; 
    }

    let idade = parseInt(prompt("Digite a idade de " + nome + ": "));

    if (!isNaN(idade)) {
        somaIdades += idade;
        contadorPessoas++;
    } else {
        alert("Por favor, digite uma idade válida.");
    }
}

let mediaIdades = somaIdades / contadorPessoas;

alert("A média das idades das pessoas é: " + mediaIdades);




