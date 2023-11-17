/// <reference types="cypress" />


describe('Waits ...', () => {

    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        cy.reload() // Carregar a pagina novamente
    })

    it('1 - Deve aguardar elemento disponível', () => {

        cy.get('#novoCampo').should('not.exist')
            .get('#buttonDelay')
            .click()
            .get('#novoCampo').type('funciona')

    })

    it('Retrys', () => {

        cy.get('#buttonDelay')
            .click()
            .get('#novoCampo')
            .should('exist')

    })

    it('Esperas 2 e busca usando lists', () => {

        cy.get('#buttonList')
            .click()
            .get('#lista li')
            .find('span') // para encontrar um elemento dentro de outro elemento.
            .should('contain', 'Item 1')
            .get('#lista li')
            .should('contain', 'Item 2')

    })

    it('button list DOM', () => {

        cy.get('#buttonListDOM')
            .click()
            .get('#lista li')
            .find('span') // para encontrar um elemento dentro de outro elemento.
            .should('contain', 'Item 1')
            .get('#lista li')
            .should('contain', 'Item 2')

    })

    it('Uso de timeout', () => {

        cy.get('#buttonDelay')
            .click()
            .get('#novoCampo')
            .should('exist')

    })

    it.only('Uso de timeout 2', () => { //pratica ruim

        cy.get('#buttonListDOM')
            .click()
            .wait(5000)
            .get('#lista li span')
            .should('contain', 'Item 2')

    })


})