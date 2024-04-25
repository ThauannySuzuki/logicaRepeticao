/* 40) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci. */

let = numero1, numero2, numero3, contadora; 

numero1=1
numero2=1
alert(numero1)
alert(numero2)

for(let contadora=3;contadora<=20; contadora++){
    numero3 = numero1+numero2

    alert(numero3)

    numero1=numero2
    numero2=numero3

}
