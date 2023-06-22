class BasePage {
    visitUrl() {
        cy.visit('https://www.fressnapf.hu/');
    }

    acceptCookie() {
        cy.get("[class='grey-popup-box cookie-base']").as("cookieBanner")
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
        cy.get("[class='logo-image']").should("be.visible");
        cy.get("[class='middle'] [data-name='Search']").should("be.visible");
        cy.get("[class='cta'] [class='btn-white']").should("be.visible");
    }

    openWebshop() {
        cy.get("[class='exit-popup-close']").as("popup")
        cy.get("@popup").then($popup => {
            if($popup.is(':visible')) {
                cy.get('popup').click()
            }
            else {
                return
            }
        })

        cy.get("[class='cta'] [class='btn-white']").invoke("removeAttr", "target").click();
    }
}

module.exports = BasePage;