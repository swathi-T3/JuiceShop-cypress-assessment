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

Cypress.Commands.add('Login',() => {
    cy.fixture('new-user').then((toStoredata) =>{
        
        // Task1 - Visit the login page and close the welcome banner if it appears
        cy.visit('http://localhost:3000/#/login')
        if (cy.get('button[aria-label="Close Welcome Banner"]')) {
            cy.get('button[aria-label="Close Welcome Banner"]').click()
        }

        // Accept Cookies
        cy.get('a[aria-label="dismiss cookie message"]').click()

        // Enter email and password from the fixture file
        cy.get('[name="email"]').type(toStoredata.email)
        cy.get('[name="password"]').type(toStoredata.password)

        cy.get('button[type="submit"]').click()

        // validate login success
         cy.url().should('include', '/search')  

        

        
    })

}) 