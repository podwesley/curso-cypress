/// <reference types="cypress" />

describe('Elementos básico', () => {

    it('text', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('.facilAchar') //class element.
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it.only('links', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

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