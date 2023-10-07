/*
Crie um programa que contenha os seguintes tipos de funções:
1. uma função tradicional com a palavra reservada "Function" e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor,
3. uma arrow function com parâmetros e que retorne um valor.
Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora*/


function bemVindo() {
    const nome = prompt(`Informe seu nome: `)
    console.log(`Bem-vindo à calculadora, ${nome}!`)
}
bemVindo()
const adicao = (numero1, numero2) => resultado = numero1 + numero2;
const subtracao = (numero1, numero2) => resultado = numero1 - numero2;
const multiplicacao = (numero1, numero2) => resultado = numero1 * numero2;
function divisao(numero1, numero2) {
    if (numero2 === 0) {
        return "Divisão por zero não é permitida!";
    }else {
        let restoDiv = numero1 % numero2
            resultado = parseInt(numero1 / numero2);
            if (restoDiv == 0) {
                console.log(`${numero1} / ${numero2} = ${resultado}`);
            } else {
                console.log(`${numero1} / ${numero2} = ${resultado} \nResto de divisão: ${restoDiv}`);
            }
        }
}
let repeat
do {
    calculadora()
} while (repeat === true);

function calculadora() {

    const operador = prompt('Informe o operador ( +, -, * ou / ): ');
    const numero1 = parseFloat(prompt('Informe o primeiro numero: '));
    const numero2 = parseFloat(prompt('Informe o segundo numero: '));
    
    if (isNaN(numero1) || isNaN(numero2)) {
        console.log('Por favor, insira números válidos.');
        calculadora();
    }

    switch(operador) {
        case '+':
            resultado = adicao(numero1, numero2)
            console.log(`${numero1} + ${numero2} = ${resultado}`);
            break;
        case '-':
            resultado = subtracao(numero1, numero2)
            console.log(`${numero1} - ${numero2} = ${resultado}`);
            break;
        case '*':
            resultado = multiplicacao(numero1, numero2)
            console.log(`${numero1} * ${numero2} = ${resultado}`);
            break;
        case '/':
            resultado = divisao(numero1, numero2)
            break;
        default:
            console.log('Operador inválido!');
            break;
}
repeatChoice = prompt(`Deseja fazer outra operação? \nS / N: `).toUpperCase()
if (repeatChoice == 'S') {
    repeat = true
} else if (repeatChoice == 'N') {
    repeat = false
} else {
    console.log("Opção inválida. Por favor, escolha 'S' para Sim ou 'N' para Não.")
}
}