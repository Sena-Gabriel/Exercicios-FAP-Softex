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
  this.saldo -= valor;
  let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-')
  this.transacoes.push(trans);
  }
// transferir

// pagar

// mostrar saldo

//
}