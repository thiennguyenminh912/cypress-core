import { baseUrl } from "helpers/constant";
import homepage from "helpers/homepage";
import { arraysAreEqual } from "helpers/util";


describe('Verify home page', () => {
    // it('Logo and title visible', () => {
    //     cy.visit(baseUrl);
    //     cy.get('#nava img[src="bm.png"]').should('be.visible');
    //     cy.get('#nava').should('contain.text', 'PRODUCT STORE');
    // });

    it('Verify header menu item', () => {
        cy.visit(baseUrl);
        const expectMenu = [
            'Home (current)',
            'Contact',
            'About us',
            'Cart',
            'Log in',
            'Sign up'
        ];

        const items = [];
        cy.get('.navbar-nav.ml-auto')
            .find('.nav-link')
            .filter(':visible')
            .each(($menuText) => {
                items.push($menuText.text());
                cy.log("item" + items);
                cy.wrap(arraysAreEqual(items, expectMenu)).should('eq', true);
            });
    });
});