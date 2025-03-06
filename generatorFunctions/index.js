function* geradora1() {
    yield 'valor1';

    yield 'valor2';

    yield 'valor3';
}

// const gen = geradora1();
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function* contador1() {
    let contador = 0;
    while (true) {
        yield ++contador;
    }
}

// const count = contador();
// console.log(count.next())
// console.log(count.next())

function contador() {
    let contador = 0;
    return function* teste(){
        while(true){
            yield ++contador;
        }
    }
}

const countGenerator = contador();
const counter = countGenerator();
// console.log(counter.next())
// console.log(counter.next())

for(let valor of counter){
    console.log(valor);
}