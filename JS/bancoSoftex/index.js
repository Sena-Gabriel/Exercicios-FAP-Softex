// testar aqui

import { Endereco } from "./model/endereco.js"
import { Agencia } from "./model/agencia.js"
import { Cliente } from "./model/cliente.js"
import { Conta } from "./model/conta.js"

let endAg = new Endereco('PE', 'Recife', 'São José', 'Rua da Guia', 1000, '305', '50080-090')
let agSoftex = new Agencia('Softex', 1234, '81932124554', 'agsoftex@ImageBitmapRenderingContext.com', endAg)
let endEgito = new Endereco('PE', 'Recife', 'Boa Viagem', 'Rua Setúbal', 1234, '508', '50097-000')
let clieEgito = new Cliente('José Egito', '000-444-555-99', new Date("1985-10-10").toLocaleDateString(), 58585858, "egito@softex.com.br", endEgito)
let contaEgito = new Conta(clieEgito, 4321, agSoftex, 1250.00)

contaEgito.depositar(200);
contaEgito.sacar(500);

console.log(contaEgito);