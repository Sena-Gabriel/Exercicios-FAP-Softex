import { TIPOTRANSACAO } from "./tipoTransacao.js";
import { Transacao } from "./transacao.js";

export class Conta{
  constructor(cliente, numero, agencia, saldo){
    this.cliente = cliente;
    this.numero = numero;
    this.agencia = agencia;
    this.DataCriacao = new Date().toLocaleDateString();
    this.saldo = saldo;
    this.status = true;
    this.transacoes = [];
  }
  // depositar da conta
  depositar(valor){
    this.saldo += valor;
    let trans = new Transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+')
    this.transacoes.push(trans);
  }
  //sacar da conta
  sacar(valor){
    if (condition) {
    this.saldo -= valor;
    let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-')
    this.transacoes.push(trans);
    } else {
    // lançar erro
    console.error('Erro: Saldo insuficiente. ' + valor + ' é maior que o saldo ' + this.saldo + ' para realizar a transação.')
    }
  }
  // transferir
  transferir(valor, contaFav){
  if (this.saldo >= valor) {
    this.saldo -= valor;
    let trans = new Transacao(TIPOTRANSACAO.transferir, new Date().toLocaleDateString(), valor, null, '-')
    this.transacoes.push(trans);
  } else {
    // lançar erro
    console.errr('Erro: Saldo insuficiente. ' + valor + ' é maior que o saldo ' + this.saldo + ' para realizar a transação.')
  }
  }
  // pagar
  pagar(){
  if (this.saldo >= valor) {
    this.saldo -= valor;
    let trans = new Transacao(TIPOTRANSACAO.transferir, new Date().toLocaleDateString(), valor, null, '-')
    this.transacoes.push(trans);
  } else {
    // lançar erro
    console.error('Erro: Saldo insuficiente. ' + valor + ' é maior que o saldo ' + this.saldo + ' para realizar a transação.')
  }
  }

  // mostrar saldo
  mostrarSaldo(valor){
    return this.saldo;
  }
  //toString para extrato
  toString(){
    return '\t Agência' 
  }  
  // extrato
  mostrarExtrato(){
    let extrato = '\t Extrato de Conta Corrente.'
    extrato += '\t---------------------------------------\n';
    extrato += '\t Cliente:' + this.cliente + '\n';
    extrato += '\t Agência:' + this.agencia + '\n';
    extrato += '\t Conta: '+ this.numero + '\n';
    extrato += '\t---------------------------------------\n';
    extrato += '\t DATA\t\tHISTÓRICO\t\tVALOR(R$)\n'


  for (const trans of this.transacoes) {
    extrato += trans.toString()
  }
    
  }
}

