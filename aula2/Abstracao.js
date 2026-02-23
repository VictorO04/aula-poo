class NaveEspacial {
    /*
    Atributos
    + nome: String
    + estaVoando: Boolean

    Métodos
    + voar(): String
    + pousar(): void
    */

    constructor(nome) {
        this.nome = nome;
        this.estaVoando = false;
    }

    voar() {
        if (!this.estaVoando) {
            this.estaVoando = true;
        }
        return `${this.nome} está voando pelo espaço`;
    }

    pousar() {
        if (this.estaVoando) {
            this.estaVoando = false;
        }
    }
}

const minhaNave = new NaveEspacial("X-Wing");
const navinha = new NaveEspacial("Millenium Falcon");

console.log(minhaNave);
console.log(minhaNave.voar());
console.log(minhaNave);
console.log("=======");
console.log(navinha);
console.log(navinha.voar());
console.log(`Está voando: ${navinha.estaVoando ? "Sim" : "Não"}`);
navinha.pousar()
console.log(`Está voando: ${navinha.estaVoando ? "Sim" : "Não"}`);
