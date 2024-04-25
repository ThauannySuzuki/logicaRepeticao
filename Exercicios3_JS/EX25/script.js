/* 25) Faça um programa que exiba os primeiros 20 números da sequência de Fibonacci usando o loop "do-while". */

let = numero1, numero2, numero3, contadora; 

numero1=1
numero2=1
alert(numero1)
alert(numero2)
contadora = 3


do{
    numero3 = numero1+numero2

    alert(numero3)

    numero1=numero2
    numero2=numero3

    contadora++
}while(contadora<=20)