const pessoa = {
    nome: "Gustavo",
    idade:20,
    usuario: "Aluno",
    saudar: function (){
        return "oi, meu nome é " +this.nome + " e eu sou " + this.usuario + "."
    }
};
console.log(pessoa.nome);
console.log(pessoa.saudar());

class Animal{
    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    exibirInformacoes(){
        return `Este é um ${this.tipo} chamado ${this.nome}`;
    }
}
const cachorro = new Animal("Bianca", "cacharro");
const gato = new Animal("Belinha", "Gato");
console.log(cachorro.exibirInformacoes())
console.log(gato.exibirInformacoes())