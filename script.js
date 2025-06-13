//Definir classe parquímetro
//Valor
class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }
//Tempo
calcularTempo(){
    if (this.valor <1.0){
        return { mensagem: "Valor insuficiente", troco: 0, tempo: 0 };
    }

    if (this.valor >= 3.00){
        return {mensagem: "Tempo: 120 minutos (Tempo máximo permitido.)", troco: this.valor - 3.0};
    }
    
        if (this.valor >= 1.75){
            return { mensagem: "Tempo: 60 minutos", troco: this.valor - 1.75 };
    }

    if (this.valor >= 1.00){
            return { mensagem: "Tempo: 30 minutos", troco: this.valor - 1.00 };    

        }
}
}

function calcular(){
    const valorInput = parseFloat(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    const parquimetro = new Parquimetro(valorInput);
    const resposta = parquimetro.calcularTempo();

    if (resposta.tempo === 0) {
        resultado.textContent = resposta.mensagem;
    } else {
        resultado.textContent = `${resposta.mensagem} | Troco R$ ${resposta.troco.toFixed(2)}`;
    }
}
