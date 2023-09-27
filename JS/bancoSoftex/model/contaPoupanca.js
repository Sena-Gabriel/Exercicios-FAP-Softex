import { Conta } from "/model/conta.js";

export class Poupanca extends Conta{
    #taxaRendimento;
    
    constructor(cliente, numero, agencia, saldo, taxaRendimento){
        super(cliente, numero, agencia, saldo);
        this.#taxaRendimento = 0.03;
    }
    
    get taxaRendimento(){
        return this.#taxaRendimento;
    } 

    set taxaRendimento(taxaRendimento){
        return this.#taxaRendimento;
    }
    
    renderMes(qtdMeses) {
        let saldoAtual = super.#saldo
        for (let i = 0; i < qtdMeses; i++) {
            saldoAtual += saldoAtual * this.#taxaRendimento;    
        }          
    }

}