/// <reference types="cypress" />


describe('Waits ...', () => {

    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        cy.reload() // Carregar a pagina novamente
    })

    it('1 - Deve aguardar elemento disponível', () => {

        cy.get('#novoCampo').should('not.exist')
            .get('#buttonDelay')
            .click()
            .get('#novoCampo').type('funciona')

    })

    it.only('Retrys', () => {

        cy.get('#buttonDelay')
            .click()
            .get('#novoCampo')
            .should('exist')

    })
})