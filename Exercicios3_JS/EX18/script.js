/* 18) Crie um programa que exiba os números pares de 1 a 50 usando o loop "do-while". */

let contadora = 0

do{
    contadora++
    if(contadora%2==0){
        document.write(contadora + "<br />")
    }
}while(contadora<=50);