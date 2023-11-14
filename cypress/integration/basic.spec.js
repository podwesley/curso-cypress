/// <reference types="cypress" />

describe('Básico de cypress', () => {

    it('visitar uma nova pagina e fazer uma validação do título', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //TODO - imprimir o log no console, e escrever o log em um campo de texto. 

    })

    it('deve procurar o botao e interagir com o elemento', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

})