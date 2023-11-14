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
