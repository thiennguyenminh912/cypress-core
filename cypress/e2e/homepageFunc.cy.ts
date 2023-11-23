import auth from "helpers/auth";
import { baseUrl } from "helpers/constant";
import homepage from "helpers/homepage";
import { arraysAreEqual } from "helpers/util";


describe('Homepage', () => {
    beforeEach(() => {
        cy.visit(baseUrl);
        // cy.wait(5000);
    });

    it('Verify logo and brand visible', () => {
        cy.get('#nava img[src="bm.png"]').should('be.visible');
        cy.get('#nava').should('contain.text', 'PRODUCT STORE');
    });

    it('Verify header menu item', () => {
        const username = 'lydtt'
        auth.login({ username: username, password: '123456', page: baseUrl });
        cy.wait(5000);

        const expectMenu = [
            'Home (current)',
            'Contact',
            'About us',
            'Cart',
            'Log out',
            `Welcome ${username}`
        ];
        const items = [];
        homepage.getMenuItemList().each(($menuText) => {
            items.push($menuText.text());
        })
            .then(() => {
                expect(arraysAreEqual(items, expectMenu)).to.equal(true);
            });
    });

    it('Verify footer About Us column', () => {
        const expectedAboutUs = {
            header: 'About Us', content: `We believe performance needs to be validated at every stage of the software development cycle and our\n              open source compatible, massively scalable platform makes that a reality.`
        };
        homepage.getFooterColumn().first().then(($columnitem1) => {
            const actualResult = { header: '', content: '' };
            actualResult.header = $columnitem1.find('h4').text();
            actualResult.content = $columnitem1.find('p').text();
            expect(actualResult.content).to.deep.equal(expectedAboutUs.content);
        });
    });

    it('Verify footer Get in Touch column', () => {
        const expectedGetinTouch = {
            header: 'Get in Touch',
            Address: 'Address: 2390 El Camino Real',
            Phone: 'Phone: +440 123456',
            Email: 'Email: demo@blazemeter.com '
        };
        homepage.getFooterColumn().eq(1).then(($columnitem2) => {
            const actualResult = {
                header: '',
                Address: '',
                Phone: '',
                Email: ''
            };
            actualResult.header = $columnitem2.find('h4').text();
            actualResult.Address = $columnitem2.find('p').eq(0).text();
            actualResult.Phone = $columnitem2.find('p').eq(1).text();
            actualResult.Email = $columnitem2.find('p').eq(2).text();
            expect(actualResult).to.deep.equal(expectedGetinTouch);
        })
    });

    it('Verify footer logo and brand column', () => {
        homepage.getFooterColumn().eq(2).within(() => {
            cy.get('img[src="bm.png"]').should('be.visible');
            cy.get('h4').should('contain.text', 'PRODUCT STORE');
        })
    });
});