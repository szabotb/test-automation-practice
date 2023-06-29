class BasePage {

    visitUrl() {
        cy.visit('https://www.fressnapf.hu/');
    }

    acceptCookie() {
        cy.getBasePageSelector("cookieBanner").as("cookieBanner")
        cy.get("@cookieBanner").then($cookieBanner => {
            if($cookieBanner.is(':visible')) {
                cy.get('cookieBanner').click()
            }
            else {
                return
            }
        })
    }

    basePageLoaded() {
        cy.getBasePageSelector("logo").should("be.visible")
        cy.getBasePageSelector("searchField").should("be.visible");
        cy.getBasePageSelector("webshopButton").should("be.visible");
    }

    openWebshop() {
        cy.getBasePageSelector("closePopUpButton").as("popup")
        cy.get("@popup").then($popup => {
            if($popup.is(':visible')) {
                cy.get('popup').click()
                cy.log('Popup was closed')
            }
            else {
                return
            }
        })

        cy.getBasePageSelector("webshopButton").invoke("removeAttr", "target").click();
    }
}

module.exports = BasePage;