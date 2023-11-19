import { authMockData } from "fixtures/authMockData";
import auth from "helpers/auth";
import { baseUrl } from "helpers/constant";
import core from "helpers/core";



describe("Login", () => {
  core.runMutipleTestCase({
    testCaseName: 'Right username', inputs: [{
      page: baseUrl,
      username: "student",
      password: "Password1234",
    }], func: auth.login, expectedFunc: (inputs: IAuthInputs) => {
      console.log(inputs.page, inputs.password, inputs.username);
      cy.get(".post-content .has-text-align-center strong", {
        timeout: 1000,
      }).contains("Congratulations student. You successfully logged in!");
    }
  })

  core.runMutipleTestCase({
    testCaseName: 'Right username', inputs: authMockData, func: auth.login, expectedFunc: (inputs: IAuthInputs) => {
      console.log(inputs.page, inputs.password, inputs.username);
      cy.get(".post-content .has-text-align-center strong", {
        timeout: 1000,
      }).contains("Congratulations student. You successfully logged in!");
    }
  })
});
