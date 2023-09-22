export class Transacao{
  constructor (tipo, data, valor, cliTransferencia, tipoValor){
    this.tipo = tipo;
    this.data = data;
    this.valor = valor;
    this.cliTransferencia = cliTransferencia;
    this.tipoValor = tipoValor;
  }
  toString(){
    return '\t' + this.data + '\t\t' + this.tipo + '\t' + this.tipoValor + '\t\t' + this.valor + '\n';
    }
}