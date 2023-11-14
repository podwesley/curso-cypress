/// <reference types="cypress" />

it('Equality', () => {

    const a = 1;

    expect(a, 'Deveria ser 1').equal(1);

    expect(a).to.be.equal(1);

    expect('a').not.to.be.equal('b');

    expect(a, 'Deveria ser 1').equal(2);


})

it('Truthy ', () => {

    const a = true;
    const b = null;
    let c;

    expect(a).to.be.true;

    expect(true).to.be.true;

    expect(b).to.be.null;

    expect(a).to.be.not.null;

    expect(c).to.be.undefined;

})

it('Objects Equality', () => {

    const obj = {
        a: 1,
        b: 2
    };


    expect(obj, 'Verificar se objetos são iguais').equal(obj);
    expect(obj, 'Forma alternativa de verificar se "obj" é igual a "obj"').equals(obj);
    expect(obj, 'Outra Forma alternativa de verificar se "obj" é igual a "obj"').eq(obj);

    //expect(obj).to.be.equal({a:1, b: 2});
    expect(obj, 'Verifica se "obj" é profundamente igual a {a: 1, b: 2}').to.be.deep.equal({ a: 1, b: 2 });
    expect(obj, 'Outra forma de verificar se "obj" é igual a {a: 1, b: 2}').eql({ a: 1, b: 2 });

    expect(obj, 'Verifica se "obj" inclui a propriedade "a" com o valor 1').include({ a: 1 });

    expect(obj, 'Verifica se "obj" tem a propriedade "b"').to.have.property('b');

    expect(obj, 'Verifica se "obj" tem a propriedade "b" com o valor 2').to.have.property('b', 2);

    expect(obj, 'Verifica se "obj" não está vazio').to.not.be.empty;

    expect({}, 'Verifica se o objeto vazio é realmente vazio').to.be.empty;

})

it('Arrays', () => {

    const arr = [1, 2, 3]


    expect(arr, 'Espera que o array possua os seguintes membros').to.have.members([1, 2, 3])

    expect(arr, 'Espera que esteja incluído no array os membros').to.include.members([1, 2])

    expect(arr, 'Espera que o array não esteja vazio.').to.not.be.empty

})

it('Types', () => {

    const num = 1
    const str = 'String'

    expect(num, 'checando se um tipo é um número').to.be.a('number')
    expect(str, 'checando se um tipo é uma string').to.be.a('string')
    expect({}, 'checando se um tipo é um objeto').to.be.an('object')
    expect([], 'checando se um tipo é um array').to.be.an('array')

})

it('Strings', () => {

    const str = 'String de teste'

    expect(str, 'checando se uma string é igual a outra.').to.be.equal('String de teste')
    expect(str, 'checando o tamanho de uma string').to.be.length(15)
    expect(str, 'checando o a string contem').to.contains('de teste')
    expect(str, 'comeca com a palavra string').to.match(/^String/)
    expect(str, 'termina com a palavra teste').to.match(/teste$/)
    expect(str, 'checa o tamanho da string usando regex').to.match(/.{15}/)
    expect(str, 'só contem letras').to.match(/\w+/)
    expect(str, 'não contém números').to.match(/\D+/)

})

it('Numbers', () => {

    const number = 4
    const floatNumber = 5.2123

    expect(number, 'checando igualdade').to.be.equal(4)
    expect(number, 'checando se o numero é acima de: ').to.be.above(3)
    expect(number, 'checando se o numero está abaixo: ').to.be.below(6)
    expect(floatNumber, 'checando igualdade de float é próximo de: ').to.be.closeTo(5.2123)
  

})