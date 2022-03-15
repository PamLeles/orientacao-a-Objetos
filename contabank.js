class ContaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;  
    }

    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    sacar(valor){
        if(valor . this._saldo){
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }

}

class ContaCorrente{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "Corrente";
        this.cartaoCredito = cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "Poupança";
    }
}


class ContaUnivesitaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo);
        this.tipo = "Universitaria";
    }

    sacar(valor){
        if(valor > 500){
            return "Operação Negada!!"
        }
        this._saldo = this._saldo - valor;
    }
}


