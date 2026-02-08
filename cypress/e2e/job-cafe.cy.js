///<reference types = "Cypress"/>

describe('Job cafe sanity spec',{defaultCommandTimeout: 10000}, () => {

    it('test job page with 10 sec',{defaultCommandTimeout: 10000},() => {
        cy.visit('http://167.99.178.249:3000/')
        cy.get('#3').click()
        
        // cy.wait(5000)
        cy.get('[class="post-item clearfix"]').should('be.visible')
    })

    // it('test job page search for QA positions',{defaultCommandTimeout: 20000},() => {
    //     cy.visit('http://167.99.178.249:3000/')
    //     cy.get('#3').click()
    //     // cy.get ('[placeholder ="position"]').type('QA', {force: true})
    //     // cy.get('button').contains('search').click({force: true})
    //     cy.searchForPosition('QA')

    //     cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        
    // })

    // it('test job page search for developer positions',{defaultCommandTimeout: 20000},() => {
    //     cy.visit('http://167.99.178.249:3000/')
    //     cy.get('#3').click()
    //     // cy.get ('[placeholder ="position"]').type('Developer', {force: true})
    //     // cy.get('button').contains('search').click({force: true})
    //     cy.searchForPosition('Developer')
    //     cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]').contains('Developer').should('be.visible')

    // it('test job page with 1 sec',{defaultCommandTimeout: 1000},() => {
    //     cy.visit('http://167.99.178.249:3000/')
    //     cy.get('#3').click()
    //     // cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]',{timeout:10000}).should('be.visible')
    // })

    // it('test job page search for USA location',{defaultCommandTimeout: 20000},() => {
    //     cy.visit('http://167.99.178.249:3000/')
    //     cy.get('#3').click()
    //     cy.searchForLocation('USA')
    //     cy.wait(5000)
    //     cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        
    // })

    it('test job page search for QA position in USA by company name',{defaultCommandTimeout: 20000},() => {
        cy.visit('http://167.99.178.249:3000/')
        cy.get('#3').click()
        cy.completeSearch('QA','Apple','USA')
        cy.wait(5000)
        cy.get('[class="post-item clearfix"]').contains('QA').should('be.visible')
        cy.get('p').contains('Apple').should('be.visible')
        cy.get('span').contains('USA').should('be.visible')
})
})
