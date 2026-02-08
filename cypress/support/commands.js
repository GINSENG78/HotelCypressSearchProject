// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import selectors from '../support/selectors.js'

// const position_placeholder = '[placeholder ="position"]';
Cypress.Commands.add('searchForPosition', (positions_name) => {
    cy.get(selectors.position_placeholder).type(positions_name, { force: true })
    cy.get('button').contains('search').click({ force: true })
})

Cypress.Commands.add('completeSearch', (positions_name, company_name, location) => {
    cy.get(selectors.position_placeholder).type(positions_name, { force: true })
    cy.get(selectors.company_placeholder).type(company_name, { force: true })
    cy.get(selectors.location_placeholder).type(location, { force: true })
    cy.get('button').contains('search').click({ force: true })
})