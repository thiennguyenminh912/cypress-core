import auth from "helpers/auth";
import { baseUrl } from "helpers/constant";


describe("Login Function", () => {
  //Valid user+password
  it('should be able to login with correct username and password.', () => {
    auth.login({ username: 'lydtt', password: '123456', page: baseUrl });
    auth.getNameOfUser().should('include.text', 'Welcome');
  })
  //invalid password
  it('Login with invalid password.', () => {
    auth.login({ username: 'ly', password: '123456', page: baseUrl });
    cy.on('window:alert', alert => {
      expect(alert).to.contains("Wrong password.")
    })
  })
  //invalid username
  it('Login with invalid username.', () => {
    auth.login({ username: 'lydtt1', password: '123456', page: baseUrl });
    cy.on('window:alert', alert => {
      expect(alert).to.contains("User does not exist.")
    })
  })
});
