const auth = {} as IAuthFunc;


auth.getNameOfUser = () => {
  return cy.get('#nameofuser', { timeout: 3000 })
}


auth.login = (inputs) => {
  const { page, username, password } = inputs
  cy.visit(page);
  cy.get('#login2').click();
  cy.get('#loginusername', { timeout: 5000 }).type(username);
  cy.get('#loginpassword', { timeout: 5000 }).type(password);
  cy.get('[onclick="logIn()"]').click({ force: true });
  cy.wait(3000);
};

export default auth;
