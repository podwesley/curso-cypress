//criar test
it('nada agora', function () { })

// const soma = function (a, b){
//     return a + b;
// }

// const soma = (a, b) => {
//     return a+b;
// } 

//funciona da mesma forma acima 
const soma = (a, b) => a + b

//arrow funcition só com um parametro
//const soma = a => a+a

console.log('resultados: ' + soma(1, 3))

it('Teste cp, function', function () {
    console.log('Function', this)
})


it('Teste cp, arrow funtion', () => {
    console.log('an arrow Function', this)
})