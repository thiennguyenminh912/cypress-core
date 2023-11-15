const auth = {} as IAuthFunc;

auth.login = (page: string, username: string, password: string) => {
  cy.visit(page);
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get("#submit").click();
  cy.get(".post-content .has-text-align-center strong", {
    timeout: 1000,
  }).contains("Congratulations student. You successfully logged in!");
};

export default auth;
