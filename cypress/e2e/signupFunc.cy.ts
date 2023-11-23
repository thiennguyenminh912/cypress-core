import { baseUrl } from "helpers/constant";
import auth from "helpers/signup";
import { generateRandomUser } from "helpers/util";

const SIGN_UP = {
  username: generateRandomUser(10),
  password: "123456",
};

describe("Signup Function", () => {
  //Valid user+password
  it("Signup successfully!", async () => {
    auth.signup({
      username: SIGN_UP.username,
      password: SIGN_UP.password,
      page: baseUrl,
    });
    const alertText = await auth.getAlert();
    expect(alertText).to.contains("Sign up successful.");
  });

  it("Signup with user already exist!", async () => {
    auth.signup({ username: "lydtt", password: "123456", page: baseUrl });
    const alertText = await auth.getAlert();
    expect(alertText).to.contains("This user already exist.");
  });
});
