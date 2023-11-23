const auth = {} as IAuthFunc;

auth.getAlert = () => {
  return new Cypress.Promise((resolve) => {
    cy.on("window:alert", resolve);
  });
};

auth.signup = (inputs) => {
  const { page, username, password } = inputs;
  cy.visit(page);
  cy.get("#signin2").click();
  cy.wait(2000);
  cy.get("#sign-username").type(username);
  cy.get("#sign-password").type(password);
  cy.get('[onclick="register()"]').click({ force: true });
  cy.wait(5000);
};

export default auth;
