import auth from "helpers/auth";
import { baseUrl } from "helpers/constant";
import homepage from "helpers/homepage";
import { arraysAreEqual } from "helpers/util";


describe('Verify home page', () => {
    it('Logo and title visible', () => {
        cy.visit(baseUrl);
        cy.get('#nava img[src="bm.png"]').should('be.visible');
        cy.get('#nava').should('contain.text', 'PRODUCT STORE');
    });

    it('Verify header menu item', () => {
        cy.visit(baseUrl);

        // Đăng nhập và đợi cho quá trình đăng nhập hoàn tất
        auth.login({ username: 'lydtt', password: '123456', page: baseUrl });
        cy.wait(5000);

        const expectMenu = [
            'Home (current)',
            'Contact',
            'About us',
            'Cart',
            'Log in',
            'Sign up'
        ];


        cy.get('.some-other-selector')
            .should('be.visible')
            .then(() => {
                // Thực hiện các hành động hoặc kiểm thử khác ở đây
                const items = [];
                homepage.getMenuItemList().each(($menuText) => {
                    items.push($menuText.text());
                })
                    .then(() => {
                        expect(arraysAreEqual(items, expectMenu)).to.equal(true);
                    });
            });
    });
});