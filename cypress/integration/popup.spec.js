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

    it('popup via link', () => {

        cy.contains('Popup2')
            .should('have.prop', 'href')
            .and('equal', 'https://www.wcaquino.me/cypress/frame.html')

    })

    // quando não sei o valor do link da propriedade eu posso usar esta ideia para pegar o valor do link
    it('deve acessar popup dinamica', () => {

        cy.contains('Popup2') //pegou um link que contem esse texto
            .then($link => {
                const link = $link.prop('href') //pegou a propriedade href deste link 
                cy.visit(link) // visitou o cara. 
            })

        cy.get('#tfield')
            .type('teste')

    })


    // abrindo a popup na propria janela alterando o target de blanck para top
    it.only('deve acessar popup dinamica e acessar a popup na propria pagina', () => {

        cy.contains('Popup2') //pegou um link que contem esse texto
            .invoke('removeAttr', 'target')
            .click()

        cy.get('#tfield')
            .type('teste')

    })

})



