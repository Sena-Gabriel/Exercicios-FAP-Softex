/*Criar um programa JavaScript que calcule a média de três notas inseridas pelo usuário e exiba o resultado no console.
Primeiro, solicite que o usuário insira três notas (entre 0 e 10) usando a função prompt(). 
Elas devem ser armazenadas em variáveis adequadas, por exemplo, nota1, nota2 e nota3, com o tipo de dado Number. 
Depois, some-as e divida por três. O resultado deste cálculo será o valor da média, que deve ser armazenado em uma variável chamada media. 
Por fim, exiba esse valor no console usando a função console.log(). */

console.log('Calculadora de médias. Informe 3 notas entre 0 a 10.')

var n1 = parseInt(prompt(`informe a 1ª nota`))
var n2 = parseInt(prompt(`informe a 2ª nota`))
var n3 = parseInt(prompt(`informe a 3ª nota`))
var media = (n1 + n2 + n3) / 3

if (((n1 || n2 || n3) <= 0) || ((n1 || n2 || n3) > 10)) {
  console.error('Erro. Valores inválidos.');
} else {
  
  console.log(`A média das notas informadas é: ${media}`)
}

