import { baseUrl } from "helpers/constant";
import auth from "helpers/signup";
import { generateRandomUser } from "helpers/util";


const SIGN_UP = {
    username: generateRandomUser(10),
    password: "123456"
}


describe("Signup Function", () => {
    //Valid user+password
    it('Signup successfully!', () => {
        auth.signup({ username: SIGN_UP.username, password: SIGN_UP.password, page: baseUrl });
        cy.on('window:alert', alert => {
            expect(alert).to.contains("Sign up successful.")
        })

    })

    it('Signup with user already exist!', () => {
        auth.signup({ username: 'lydtt', password: '123456', page: baseUrl });
        cy.on('window:alert', alert => {
            expect(alert).to.contains("This user already exist.")
        })
    })
});
