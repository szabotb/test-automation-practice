class BasePage {
    visitUrl() {
        cy.visit('https://job.lhsystems.hu/');
    }

    openJobs() {
        cy.get('#logo').should("be.visible")
        cy.get("h1[class='title']").should("be.visible")        
        cy.get("a[class='button extra']:nth-child(3)").click()
    }
}

module.exports =  BasePage ;