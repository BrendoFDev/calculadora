function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

 Pessoa.prototype.NomeCompleto = function (){ return `${this.nome} ${this.sobrenome}`};

// // Pessoa.prototype.NomeCompleto = ()=> `arara`;
const pessoa1 = new Pessoa("Carlos", "Italo");
// const date = new Date();

// console.log(pessoa1.NomeCompleto())
// console.log(date)

console.log(pessoa1.NomeCompleto())
