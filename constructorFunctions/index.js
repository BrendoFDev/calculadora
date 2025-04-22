function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function PessoaJuridica(nome, idade, cnpj) {
    Pessoa.call(this, nome, idade);
    this.cnpj = cnpj;
}

PessoaJuridica.prototype = Object.create(Pessoa.prototype);
PessoaJuridica.prototype.constructor = PessoaJuridica;

// class PessoaFisica extends Pessoa{
//     constructor(nome, idade, cpf){
//         super(nome, idade);
//         this.cpf = cpf
//     }
// }

// class PessoaJuridica extends Pessoa {
//     constructor(nome, idade, cnpj) {
//         super(nome, idade);
//         this.cnpj = cnpj;
//     }
// }

const pessoaJuridica = new PessoaJuridica('Brendo', 19, '12312312312')

console.log(pessoaJuridica)