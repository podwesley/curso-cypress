/// <reference types="cypress" />

describe('Básico de cypress', () => {

    it('visitar uma nova pagina e fazer uma validação do título ', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        //cy.title().debug()

        // promissse
        cy.title().then(title => {
            console.log(title)
        })

        // guardando coisas 
        let syncTitle;

        // promissse
        cy.title().then(title => {
            console.log(title)
            cy.get('#formNome').type(title) // escrever um log em um campo de texto
            syncTitle = title;
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            cy.wrap($el).type(syncTitle)
        })

    })

    it('deve procurar o botao e interagir com o elemento', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')

        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    })

})