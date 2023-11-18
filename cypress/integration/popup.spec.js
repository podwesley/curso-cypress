/// <reference types="cypress" />

describe('popups', () => {



    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        cy.reload() // Carregar a pagina novamente
    })


    it('deve verificar se o popup foi invocado', () => {

        cy.window().then(win => {
           cy.stub(win, 'open').as('janela')
        })
 
        cy.get('#buttonPopUp')
            .click()
        cy.get('@janela').should('be.called')

    })

})



