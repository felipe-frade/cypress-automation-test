declare namespace Cypress {
    interface Chainable {
        // Define the structure of your custom commands here
        login(): Chainable<Element>;
        // Add more custom commands as needed
    }
}
