const { Given, When, Then } = require('cucumber');

Given('user goes to URL {string}', async (testController) => {
  return 'pending';
});

When('user clicks linkAbout from test-page-example', () => {
  return 'pending';
});

When('user clicks {string}.{string}', (string, string2) => {
  return 'pending';
});

Then('the title should contain {string}', (string) => {
  return 'pending';
});
