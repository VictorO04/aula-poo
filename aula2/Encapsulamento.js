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
        return this.#estaVoando ? "Sim" : "Não";
    }
}

const minhaNave = new NaveEspacial("X-Wing");

console.log(minhaNave);
console.log(minhaNave.voar());
console.log(minhaNave.receberInfo());
minhaNave.pousar();
console.log(minhaNave.receberInfo());
