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

class NaveSith extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHisperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando do malvado lord ${this.mestre}`;
    }
}

class NaveJedi extends NaveEspacial {
    constructor(nome, mestre) {
        super(nome);
        this.mestre = mestre;
    }

    ativarHisperespaco() {
        return `${this.nome} entrou no hiperespaço sob o comando de ${this.mestre}`;
    }
}

const minhaNaveJedi = new NaveJedi('X-Wing', 'Luke');
const minhaNaveSith = new NaveSith('StarFighter', 'Darth Vader');

console.log(minhaNaveJedi.voar());
console.log(minhaNaveJedi.ativarHisperespaco());

console.log(minhaNaveSith.voar());
console.log(minhaNaveSith.ativarHisperespaco());
