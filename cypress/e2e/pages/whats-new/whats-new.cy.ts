import { webElements } from "../../../constants/web-elements";

describe('Home Page', () => {
    beforeEach(() => {
        // https://magento.softwaretestingboard.com - see cypress.env.json or cypress.env-example.json
        cy.visit(`${Cypress.env('baseUrl')}`);
        cy.get(webElements.header.nav.whatsNew).click();
        cy.url({ timeout: 3000 }).should('include', '/what-is-new.html');
    });
    it("What's New Page", () => {   
        cy.get(webElements.title, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.sidebar.main, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.sidebar.additional, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.pages.home.productItems, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.pages.home.productItems, { timeout: 3000 })
            .find(webElements.pages.home.productItem).should('have.length.greaterThan', 3);
    }); 
});