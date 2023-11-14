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
