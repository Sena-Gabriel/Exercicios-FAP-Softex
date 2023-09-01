var qtdRodas = parseInt(prompt(`Informe o numero de rodas do veículo: `))
var pesoBruto = parseFloat(prompt(`Informe o peso bruto em quilogramas: `))
var qtdPessoas = parseInt(prompt(`Informe a quantidade de pessoas no veículo: `))

if ((qtdRodas == 2) || (qtdRodas == 3)) {
        alert(`A melhor categoria de habilitação para o veículo é: A`)
} else if ((qtdRodas == 4) && (qtdPessoas >= 1 && qtdPessoas <= 8) && (pesoBruto >= 1 && pesoBruto<= 3500)) {
        alert(`A melhor categoria de habilitação para o veículo é: B`)
} else if ((qtdRodas >= 4) && (pesoBruto >= 3500 && pesoBruto <=6000)) {
        alert(`A melhor categoria de habilitação para o veículo é: C`)
} else if ((qtdRodas >= 4) && (qtdPessoas > 8)) {
        alert(`A melhor categoria de habilitação para o veículo é: D`)
} else if ((qtdRodas >= 4) && (pesoBruto >= 6000)) {
        alert(`A melhor categoria de habilitação para o veículo é: E`)
} else {
        alert('Erro. Verifique os dados e tente novamente.');
}   
