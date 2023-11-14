/// <reference types="cypress" />


describe('Elementos básico', () => {

    before(() => { //Vai rodar uma vez antes de todos os testes. 
        cy.visit('https://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => { // vai executar antes de cada teste. 
        cy.reload() // Carregar a pagina novamente
    })

    it('text', () => {

        cy.get('.facilAchar') //class element.
            .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('links', () => {

        cy.get('[href="#"]')
            .click()
            .should('have.not.text', 'Voltou!')
            .get('#resultado')
            .should('have.text', 'Voltou!')
            .reload() // Carregar a pagina novamente
            .get('#resultado')
            .should('have.text', 'Status: Nao cadastrado')
    })

    it('textField', () => {

        cy.get('#formNome')
            .type('cypress teste')
            .should('have.value', 'cypress teste') // valida se no campo do texto foi escrito a parada. 

    })

    it.only('textarea', () => {

        cy.get('#elementosForm\\:sugestoes')
            .type('adfgasdfkvjakfvkasdfj')


        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('cypress teste{selectAll}acerto', { delay: 100 }) //deley a cada letra digitada
            .should('have.value', 'acerto') // valida se no campo do texto foi escrito a parada. 

    })

    it('textField list', () => {

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('cypress teste{backspace}') //da um backspace na parada
            .should('have.value', 'cypress test') // valida se no campo do texto foi escrito a parada. 

    })
})