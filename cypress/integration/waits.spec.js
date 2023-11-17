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

    it('Uso de timeout 2', () => { // pratica ruim

        cy.get('#buttonListDOM')
            .click()
            .wait(5000)
            .get('#lista li span')
            .should('contain', 'Item 2')

    })

    it('Uso de timeout 3', () => {

        cy.get('#buttonListDOM')
            .click()
            .get('#lista li span')
            .should('have.length', 1)
            .get('#lista li span')
            .should('have.length', 2)

    })

    it('Clique retry', () => {

        cy.get('#buttonCount')
            .click()
            .click()
            .should('have.value', '111')

    })

    it.only('then vs should', () => {

        // o should fica sendo executado ao longo da espera e o then aguarda a requisição até que o get finalize.

        // usando o shold
        cy.get('#buttonListDOM')
            .click()
            .get('#lista li span')
            .should('have.length', 1)
        //.debug()

        // then tratando com promessas 
        cy.get('#buttonListDOM')
            .get('#lista li span')
            .then(elemento => {
                console.log('then() 1 - elemento html: ', elemento)
                expect(elemento, '').to.have.length(1)
            })

        // then tratando com promessas 
        cy.get('#buttonListDOM')
            .get('#lista li span')
            .should(elemento => {
                console.log('shoud() 1 - elemento html: ', elemento)
                expect(elemento, '').to.have.length(1)
            })


        // then ele retorna alguma coisa alguma alteração só quem considera o return é o then
        cy.get('#buttonListDOM')
            .then(elemento => {
                console.log('then() 2 - elemento html: ', elemento)
                expect(elemento, '').to.have.length(1)
                return 2
            })
            .and('eq', 2)
            .and('not.have.id', 'buttonListDOM')



        // should vai retornar sempre o elemento dentro da função e ignora qualquer retorno
        cy.get('#buttonListDOM')
            .should(elemento => {
                console.log('then() 2 - elemento html: ', elemento)
                expect(elemento, '').to.have.length(1)
                return 2
            })
            .and('have.id', 'buttonListDOM')

    })


})