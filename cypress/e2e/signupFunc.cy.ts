import { baseUrl } from "helpers/constant";
import auth from "helpers/auth";

function generateRandomUser(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

const SIGN_UP = {
    username: generateRandomUser(10),
    password: "123456"
}

describe("Signup Function", () => {
    //Valid user+password
    it('Signup successfully!', () => {
        cy.visit(baseUrl);
        cy.get('#signin2').click();
        cy.get('#sign-username').type(`${SIGN_UP.username}`);
        cy.get('#sign-password').type(`${SIGN_UP.password}`);
        cy.get('[onclick="register()"]').click({ force: true });
        cy.on('window:alert', alert => {
            expect(alert).to.contains("Sign up successful.")
        })

    })

    it('Signup with user already exist!', () => {
        cy.visit(baseUrl);
        cy.get('#signin2').click();
        cy.get('#sign-username').type('lydtt');
        cy.get('#sign-password').type(`${SIGN_UP.password}`);
        cy.get('[onclick="register()"]').click({ force: true });
        cy.on('window:alert', alert => {
            expect(alert).to.contains("This user already exist.")
        })
    })
});
