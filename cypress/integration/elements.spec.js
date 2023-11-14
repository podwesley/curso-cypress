/// <reference types="cypress" />

describe('Elementos básico', () => {

    beforeEach(() => { //vai executar antes de cada teste. 

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

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