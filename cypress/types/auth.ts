interface IAuth {
  username: string;
  password: string;
}

interface IAuthFunc {
  login: (page: string, username: string, password: string) => void;
}
