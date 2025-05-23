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


    it('Alert com stub/mock', () => {

        const mock = cy.stub().as('alerta')// o as é um alias chamado alerta

        cy.on('window:alert', mock)
        cy.get('#alert')
            .click().then(() => {
                expect(mock.getCall(0)).to.be.calledWith('Alert Simples')
            })

    })


    it('Confirm', () => {


        cy.get('#confirm')
            .click()

        cy.on('window:confirm', mensagem => {
            expect(mensagem).to.be.equal('Confirm Simples')
        })

        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal('Confirmado')
        })

    })

    it('Deny', () => {


        cy.get('#confirm')
            .click()

        cy.on('window:confirm', mensagem => {
            expect(mensagem).to.be.equal('Confirm Simples')
            return false
        })

        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal('Negado')
        })

    })

    it('promp', () => {

        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('42')

        })

        cy.on('window:alert', mensagem => {
            expect(mensagem).to.be.equal(':D')
        })

        cy.get('#prompt')
            .click()

    })

    it.only('validando mensagens', () => {

        const stub = cy.stub().as('alerta')

        cy.on('window:alert', stub)

        cy.get('#formCadastrar')
            .click()
            .then(() => {
                expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio')
            })

        cy.get('#formNome').type('Wesley')
        cy.get('#formCadastrar')
            .click()
            .then(() => {
                expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio')
            })

        cy.get('[data-cy=dataSobrenome]').type('Soares')
        cy.get('#formCadastrar')
            .click()
            .then(() => {
                expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio')
            })

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)')
            .should('contain', 'Cadastrado!')


    })
})