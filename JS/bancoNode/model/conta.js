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
}