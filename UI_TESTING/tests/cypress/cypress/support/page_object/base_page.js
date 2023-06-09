class BasePage {
    visitUrl() {
        cy.visit('https://www.epam.com/careers');
    }

    acceptCookie() {
        cy.get('#onetrust-banner-sdk').should("be.visible")
        cy.get('#onetrust-accept-btn-handler').should("be.visible")        
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('#onetrust-banner-sdk').should("not.be.visible")
    }
}

module.exports =  BasePage ;