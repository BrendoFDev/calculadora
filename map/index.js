let pessoas = [
    { id: 1, nome: 'Patricia', peso: 80, altura: 1.60 },
    { id: 2, nome: 'Carlos', peso: 80, altura: 1.90 },
    { id: 3, nome: 'Brendo', peso: 50, altura: 1.60 },
    { id: 4, nome: 'Caleb', peso: 70, altura: 1.75 },
];

let peapleMapper = new Map();

for (let pessoa of pessoas) {
    let resultadoImc = imc(pessoa.peso, pessoa.altura).toFixed(2);
    peapleMapper.set(pessoa.nome, resultadoImc);
}

function imc(peso, altura) {
    return peso / (altura * altura);
}

console.table(pessoas);
console.table(peapleMapper);
console.log(peapleMapper.has(3))