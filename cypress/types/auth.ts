interface IAuthInputs {
  username: string;
  password: string;
  page: string;
}

interface IAuthFunc {
  login: (inputs: IAuthInputs, expectedFunc?: (inputs: IAuthInputs) => void) => void;
  signup: (inputs: IAuthInputs, expectedFunc?: (inputs: IAuthInputs) => void) => void;

  getNameOfUser: () => any;
  getAlert: () => any
}

