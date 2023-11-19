const auth = {} as IAuthFunc;

auth.login = (inputs, expectedFunc) => {
  const { page, username, password } = inputs
  cy.visit(page);
  cy.get('#login2').click();
  cy.wait(3000);
  cy.get('#loginusername', { timeout: 3000 }).type(username);
  cy.wait(3000);
  cy.get('#loginpassword', { timeout: 3000 }).type(password);
  cy.wait(3000);
  cy.get('[onclick="logIn()"]').click();
  cy.wait(3000);
  expectedFunc(inputs);
};

export default auth;
