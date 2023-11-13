/// <reference types="cypress" />

describe('agrupar testes' , () => {

    describe('agrupar testes mais especificos' , () => {
        it('teste 1 e', () => {

        })

        it.skip('teste 2 e', () => {

        })
    })

    it.only('teste 1', () => {

    })

    it('teste 2', () => {

    })

})