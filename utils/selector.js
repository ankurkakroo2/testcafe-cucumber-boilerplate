const { Selector } = require('testcafe');

//TODO: Needs to be extended to support all options
module.exports = (selector, tc) =>
  Selector(selector).with({
    boundTestRun: tc,
  })();
