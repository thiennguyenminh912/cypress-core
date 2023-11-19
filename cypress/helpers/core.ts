const core = {} as ICoreFunc;

core.runMutipleTestCase = ({ testCaseName, inputs, func, expectedFunc }) => {
  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    it(testCaseName, () => {
      func(element.inputs, expectedFunc);
    });
  }
};

export default core;
