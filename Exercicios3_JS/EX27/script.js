/* 27) Crie um programa que exiba os números ímpares de 1 a 50 usando o loop "do-while". */


let contadora = 1;


do{
    if (contadora % 2 !== 0) { 
        document.write(contadora + "<br />");
    }
    contadora++;
}while (contadora <= 50)

