/// <reference types="cypress" />

describe('iframe', () => {

    // iteração restrita
    it('iframe parte 1', () => {

        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body)
                .find('#tfield')
                .type('asdfadsf')
                .should('have.value', 'asdfadsf')

            cy.on('window:alert', msg => {
                expect(msg).to.be.equal('Alert Simples')
            })

            cy.wrap(body)
                .find('#otherButton')
                .click()

        })

    })

    // iteração restrita
    it.only('iframe parte 2 - deve testar frame diretamente', () => {

        cy.visit('https://www.wcaquino.me/cypress/frame.html')


        cy.get('#otherButton')
            .click()

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })



    })

})