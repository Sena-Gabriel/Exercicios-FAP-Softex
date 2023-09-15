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
        resultado = numero1 / numero2;
        console.log(`${numero1} / ${numero2} = ${resultado}`);
        break;

    default:
        console.log('Operador inválido!');
        break;
}
