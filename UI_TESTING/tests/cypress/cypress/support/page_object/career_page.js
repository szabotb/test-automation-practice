const BasePage = require("./base_page");

class CareerPage extends BasePage {
    pageLoaded() {
        cy.get("li[class='breadcrumbs__item']").last().should("contain.text", "Careers")
        cy.get("[class='job-search recruiting-search']").should("be.visible")
        cy.get("[id='new_form_job_search-keyword']").should("be.visible")
        cy.get("[id='new_form_job_search-location']").should("be.visible")
        cy.get("[id='new_form_job_search-department']").should("be.visible")
        cy.get("[type='submit']").should("be.visible")
        cy.get("[class='job-search__filter-list']").should("be.visible")
    }
}

module.exports = new CareerPage()