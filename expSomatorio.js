function ola(nome) {
  window.alert(`Olá, ` + nome)
}

function expSomatorio(n) {
  let r = 0
  for (let i = 0; i < n; i++) {
    r += 2 * i + 1
  }
  return r
}

var n, resultado = 0

var pessoa = prompt(`Informe seu nome:  `)

ola(pessoa);

n = parseInt(prompt(`informe um numero inteiro maior que 0: `))

if (n >= 0) {
  expSomatorio(n);

  console.log(`${n}² = ${resultado}`)

} else {
  console.log(`numero invalido!`)
}