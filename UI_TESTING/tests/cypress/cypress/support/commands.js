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

Cypress.Commands.add('readSelectors', (page, selector) => {
    let nameOfLocator;
    let locator;
    cy.readFile(`cypress/support/page_object/${page}/selectors.json`).its("selectors").then(($selectorObj) => {
        for (const prop in $selectorObj) {
            if (prop === selector) {
                cy.log(`${$selectorObj[prop]}`);
                cy.log(`${prop}`)
                nameOfLocator = prop
                locator = $selectorObj[prop];
            }
        }
        cy.wrap(locator).as(`${nameOfLocator}`);
    });
});

// TODO !!!
Cypress.Commands.add('getSelector', )
