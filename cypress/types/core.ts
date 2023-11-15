interface ITestCase {
  testCaseName: string;
  func: () => void;
}

interface ICoreFunc {
  runMutipleTestCase: (data: ITestCase[]) => void;
}
