import { webElements } from "../../../constants/web-elements";

describe('Home Page', () => {
    beforeEach(() => {
        // https://magento.softwaretestingboard.com - see cypress.env.json or cypress.env-example.json
        cy.visit(`${Cypress.env('baseUrl')}`);
    });  
    it('Should open', () => {     
        cy.get(webElements.title, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.pages.home.productItems, { timeout: 3000 }).should('be.visible');
        cy.get(webElements.pages.home.productItems, { timeout: 3000 })
            .find(webElements.pages.home.productItem).should('have.length.greaterThan', 3);
    }); 
});