/// <reference types="cypress" />

describe('iframe', () => {



    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        //  cy.reload() // Carregar a pagina novamente
    })

    // iteração restrita
    it('iframe parte 1', () => {

        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body)
                .find('#tfield')
                .type('asdfadsf')
                .should('have.value', 'asdfadsf')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })

            cy.get('#otherButton').click()

        })

    })

})