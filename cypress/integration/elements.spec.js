/// <reference types="cypress" />

describe('Elementos básico', () => {

    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 

        cy.reload() // Carregar a pagina novamente

    })

    it('text', () => {

        cy.get('.facilAchar') //class element.
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('links', () => {

        cy.get('[href="#"]')
            .click()
            .should('have.not.text', 'Voltou!')
            .get('#resultado')
            .should('have.text', 'Voltou!')
            .reload() // Carregar a pagina novamente
            .get('#resultado')
            .should('have.text', 'Status: Nao cadastrado')


    })


})