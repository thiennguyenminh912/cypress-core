interface IAuth {
  page: string;
  username: string;
  password: string;
}

interface IAuthInputs {
  username: string;
  password: string;
  page: string;
}

interface IAuthFunc {
  login: (inputs: IAuthInputs, expectedFunc?: (inputs: IAuthInputs) => void) => void;
}
