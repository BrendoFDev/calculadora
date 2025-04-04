const product = { nome: "Cadeira", Valor: 600 }

const newProduct = Object.assign({}, product,{ Material: "Plastico"});

const productKeys = Object.keys(newProduct);

// for(let key of productKeys){
//     console.log(Object.getOwnPropertyDescriptor(newProduct, key))
// }

// console.log(Object.getOwnPropertyDescriptors(newProduct, productKeys));

// console.log(Object.entries(newProduct))

const refactProduct = {}

for(let [key, value] of Object.entries(newProduct)){
   Object.defineProperty(refactProduct, key,{
    value,
    enumerable:true,
    configurable:true
   });
}

console.log(refactProduct)