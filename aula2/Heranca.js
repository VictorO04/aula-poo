class NaveEspacial {
    #estaVoando;

    constructor(nome) {
        this.nome = nome;
        this.#estaVoando = false;
    }

    voar() {
        if (!this.#estaVoando) {
            this.#estaVoando = true;
        }
        return `${this.nome} está voando pelo espaço`;
    }

    pousar() {
        if (this.#estaVoando) {
            this.#estaVoando = false;
        }
    }

    receberInfo() {
        return this.#estaVoando ? 'Sim' : 'Não';
    }
}

class NaveJedi extends NaveEspacial{
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHisperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando de ${this.mestre}`;
    }
}

const minhaNave = new NaveJedi("StarFighter", "Yoda");

console.log(minhaNave.voar());
console.log(minhaNave.ativarHisperespaco());
