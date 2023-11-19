interface ICoreParams {
  testCaseName: string;
  inputs: any[];
  func: any;
  expectedFunc: any;
}

interface ICoreFunc {
  runMutipleTestCase: (params: ICoreParams) => void;
}
