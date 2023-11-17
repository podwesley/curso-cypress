/// <reference types="cypress" />

describe('Alerts', () => {

    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        // cy.reload() // Carregar a pagina novamente
    })

    it('Alert 1', () => {

        cy.get('#alert')
            .click()
        cy.on('window:alert', mensagem => { //pega eventos que ocorrem na tela
            console.log(mensagem)
            expect(mensagem).to.be.equal('Alert Simples')
        })

    })


    it.only('Alert com stub/mock', () => {

        const mock = cy.stub().as('alerta')// o as é um alias chamado alerta

        cy.on('window:alert', mock)
        cy.get('#alert')
            .click().then(() => {
                expect(mock.getCall(0)).to.be.calledWith('Alert Simples')
        })

    })


})