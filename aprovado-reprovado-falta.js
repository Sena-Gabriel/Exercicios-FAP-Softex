https://blockly-demo.appspot.com/static/demos/code/index.html#e2ork8

var nome, nota1, nota2, qFaltas, media;


nome = window.prompt('Informe o nome do aluno: ');
nota1 = Number(window.prompt('Informe a 1ª nota: '));
nota2 = Number(window.prompt('Informe a 2ª nota: '));
qFaltas = Number(window.prompt('Informe a quantidade de faltas: '));
media = (nota1 + nota2) / 2;
if (qFaltas >= 3) {
  window.alert(['O aluno ',nome,' está REPROVADO por falta.'].join(''));
} else if (media >= 7 && media <= 10) {
  window.alert(['O aluno ',nome,' está APROVADO por média.'].join(''));
} else if (media < 7 && media >= 0) {
  window.alert(['O aluno ',nome,' está REPROVADO por média.'].join(''));
} else {
  window.alert('ERRO. Verifique as informações e tente novamente.');
}
