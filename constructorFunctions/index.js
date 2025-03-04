function Pessoa(nome,idade){
        this.nome = nome;
        this.idade = idade;
}

class PessoaFisica extends Pessoa{
    constructor(nome, idade, cpf){
        super(nome, idade);
        this.cpf = cpf
    }
}

class PessoaJuridica extends Pessoa{
    constructor(nome, idade, cnpj){
        super(nome, idade);
        this.cnpj = cnpj;
    }
}

const pessoaJuridica = new PessoaJuridica('Brendo',19,'12312312312')

console.log(pessoaJuridica)