const core = {} as ICoreFunc;

core.runMutipleTestCase = (data) => {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    it(element.testCaseName, () => {
      element.func();
    });
  }
};

export default core;
