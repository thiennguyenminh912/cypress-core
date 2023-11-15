import { authMockData } from "fixtures/authMockData";
import auth from "helpers/auth";
import core from "helpers/core";

describe("Login", () => {
  core.runMutipleTestCase([
    {
      testCaseName: "failed",
      func: () =>
        auth.login(
          "https://practicetestautomation.com/practice-test-login/",
          authMockData[0].username,
          authMockData[0].password
        ),
    },
    {
      testCaseName: "passes",
      func: () =>
        auth.login(
          "https://practicetestautomation.com/practice-test-login/",
          authMockData[1].username,
          authMockData[1].password
        ),
    },
  ]);
});
