let nomes1 = ['brendo','maria', 'joana']
const nomes2 = ['vitoria', 'viviane', 'kaylane']


// nomes1.push('brendo')

// console.log(nomes1)
// console.log(nomes2)

// nomes2.push('barbara')
// console.log(nomes1)
// console.log(nomes2)

// console.log(nomes1.slice(0,-2))
// const nomearray = 'Brendo Farias Rodrigues'.split(' ')
// console.log(nomearray)

// console.log(nomearray.join(' '))

nomes1.splice(nomes1.length,null,"carlos", 'benicio')

// console.log(nomes1)

// nomes1.splice(-1, 1)

// console.log(nomes1)

// nomes1 = nomes1.concat(nomes2);

let nomes3 = [...nomes1,...nomes2]
// console.log(nomes3)


const numeros = [1,20,50,3,12,31,9,78,100,6];

console.log(numeros.filter((number)=>{
    return number >10
}))



