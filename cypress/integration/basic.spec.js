/// <reference types="cypress" />

describe('Básico de cypress', () => {

    it('visitar uma nova pagina e fazer uma validação do título', () => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        //const title = cy.title()
        //console.log(title)

        cy.title().should('be.equal', 'Campo de Treinamento')

    })

})