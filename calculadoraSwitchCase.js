let resultado;

const operador = prompt('Informe o operador ( +, -, * ou / ): ');

const numero1 = parseFloat(prompt('Informe o primeiro numero: '));
const numero2 = parseFloat(prompt('Informe o segundo numero: '));

switch(operador) {
    case '+':
        resultado = numero1 + numero2;
        console.log(`${numero1} + ${numero2} = ${resultado}`);
        break;

    case '-':
        resultado = numero1 - numero2;
        console.log(`${numero1} - ${numero2} = ${resultado}`);
        break;

    case '*':
        resultado = numero1 * numero2;
        console.log(`${numero1} * ${numero2} = ${resultado}`);
        break;

    case '/':
        let restoDiv = numero1 % numero2
        resultado = parseInt(numero1 / numero2);
        if (restoDiv == 0) {
            console.log(`${numero1} / ${numero2} = ${resultado}`);
        } else {
            console.log(`${numero1} / ${numero2} = ${resultado} \nResto de divisão: ${restoDiv}`);
        }
        
        break;

    default:
        console.log('Operador inválido!');
        break;
}
