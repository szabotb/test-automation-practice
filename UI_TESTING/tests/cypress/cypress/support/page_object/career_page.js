/// <reference types="Cypress" />

const BasePage = require("./base_page");

class CareerPage extends BasePage {
    pageLoaded() {
        cy.get("div[class='title_area'] h1").should("be.visible")
        cy.get("div[class='job-list-filterWrapper']").should("be.visible")
        cy.get("div#ms-list-1 button").as("location")
        cy.wait("@location")
        cy.get("div#ms-list-1 button").should("be.visible")
        cy.get("div#ms-list-2 button").should("be.visible")
        cy.get("div[class='job-rows']").as("rows")
        cy.wait("@rows")
    }
}

module.exports = new CareerPage()