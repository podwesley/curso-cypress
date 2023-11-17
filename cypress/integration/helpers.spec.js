/// <reference types="cypress" />

describe('Helpers', () => {

    before(() => {
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('wrap', () => {

        const objeto = {
            nome: 'user', idade: 20
        }

        expect(objeto.nome).to.equal('user')
        expect(objeto).to.have.property('nome')

        cy.wrap(objeto)
            .should('have.property', 'nome')

        // ex 1 - fazendo usando o cypress
        cy.get('#formNome')
            .type('funciona?')
            .clear()


        // // ex 2 - fazendo usando o cypress usando uma promisse
        cy.get('#formNome').then($elemento => {

            //$elemento.val('funciona via jquery')

            cy.wrap($elemento)
                .type('Funciona via cypress? ')

        })


        // ex 3 - fazendo usando uma promisse
        const promisse = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        // 1 exemplos   

        // 2 
        cy.get('#buttonSimple').then(() => { console.log('Encontrei o primeiro botão. ') })

        // 1 - essa promisse será executada primeiro. 
        promisse.then(num => console.log(num)) // essa promisse vai executar primeiro 

        // 3 
        cy.get('#buttonList').then(() => { console.log('Encontrei o segundo botão. ') })

        // 2 exemplos gerenciando promisse com o cypress


        // 1
        cy.get('#buttonSimple').then(() => { console.log('Encontrei o primeiro botão. ') })

        // 2 - essa promisse será executada na segunda . 
        cy.wrap(promisse).then(retorno => console.log(retorno))

        // 3
        cy.get('#buttonList').then(() => { console.log('Encontrei o segundo botão. ') })

        // a validação será comparada com 2
        cy.wrap(1).then(numero => { return 2 }).should('be.equal', 2)

         // vai dar erro pois o should ignora o retorno. 
         cy.wrap(1).should(numero => { return 2 }).should('be.equal', 2)

    })
})