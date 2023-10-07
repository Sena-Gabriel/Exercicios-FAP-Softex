//https://blockly-demo.appspot.com/static/demos/code/index.html#qgwpxx

var nomeAluno, nota1, nota2, media;


nomeAluno = window.prompt('Informe o nome do aluno: ');
nota1 = Number(window.prompt('Informe a 1ª nota: '));
nota2 = Number(window.prompt('Informe a 2ª nota: '));
media = (nota1 + nota2) / 2;
if (media >= 7 && media <= 10) {
  window.alert(['A média do aluno ',nomeAluno,' é: ',media,' | Situação: APROVADO'].join(''));
} else if (media < 7 && media >= 0) {
  window.alert(['A média do aluno ',nomeAluno,' é: ',media,' | Situação: REPROVADO'].join(''));
} else {
  window.alert('ERRO. Verifique as informações e tente novamente.');
}
