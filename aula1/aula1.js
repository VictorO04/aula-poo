const pessoa = {
    nome: 'Victor',
    idade: 17,
    vivo: true,
}

console.log(`Eu sou o ${pessoa.nome} e tenho ${pessoa.idade} anos.`);

class Jogo {
    constructor(titulo, anoLancamento, desenvolvedor) {
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.desenvolvedor = desenvolvedor;
    }
}

const jogo1 = new Jogo('Death Stranding 2: On the Beach', 2025, 'Kojima Productions',);
const jogo2 = new Jogo('Dark Souls', 2016, 'FromSoftware',);

console.log(jogo1);
