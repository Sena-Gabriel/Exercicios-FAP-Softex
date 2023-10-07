function fatorial(n) {
  if (n == 1) {
    return 1
  }
  else{
    return fatorial(n - 1) * n
  }
}
  n = parseInt(prompt(`informe o fator:  `))
  if (n > 0){
    alert(`O fatorial de ${n} é: ${fatorial(n)}`)
  } else {
  alert(`numero invalido`)
}