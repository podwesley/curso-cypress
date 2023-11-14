/// <reference types="cypress" />

describe('Elementos básico', () => {

    it.only('text', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('.facilAchar') //class element.
        .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

})