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

    it('textarea', () => {

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

    it('radio button ', () => {

        cy.get('#formSexoFem')
            .click()
            .should('be.checked') //verificar se um botao esta checado.
            .get('#formSexoMas')
            .should('not.be.checked') //verificar se um botao não esta checado.

        // pegando todos os checks e verificando qual esta checado.

        cy.get("[name=formSexo]")
            .should('have.length', 2);


    })

    it('checkbox', () => {

        cy.get('#formComidaPizza')
            .click()
            .should('be.checked') //verificar se um botao esta checado.

        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true }) // mandando essa properties dentro do click ele clica em tudo. 
            .get('#formComidaPizza')
            .should('not.be.checked')
            .get('#formComidaVegetariana')
            .should('be.checked')

    })

    it('combos', () => {

        // selecionando por texto
        cy.get('[data-test=dataEscolaridade]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        // selecionando por value    
        cy.get('[data-test=dataEscolaridade]')
            .select('1graucomp')
            .should('have.value', '1graucomp')

        //TODO - validar opções do combo. 
    })

    it.only('combos multiplos', () => {

        // é o mesmo de cima porém mandamos os valores dentro de um array nessa situação 
        // de combo multiplo quando mandamos um array temos que mandar os values e não os textos
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'futebol'])
            
        //TODO - validar opções selecionadas do combo multiplo.  
    })

})