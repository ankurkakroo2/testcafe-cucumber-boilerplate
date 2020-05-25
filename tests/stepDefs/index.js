const { Given, When, Then } = require('cucumber');
const Selector = require('../../utils/selector');
import { ClientFunction } from 'testcafe';

Given('user goes to URL {string}', async (testController) => {
  await testController.navigateTo('https://www.google.com/');
});

When(
  'user fills out the search field with {string}',
  async (testController, [queryString]) => {
    const searchField = Selector('input', testController).withAttribute(
      'name',
      'q'
    );
    await testController.typeText(searchField, queryString).pressKey('enter');
  }
);

When('user submits the form', async (testController) => {
  const searchField = Selector('input', testController).withAttribute(
    'name',
    'q'
  );
  await testController.typeText(searchField, queryString);
});

When('user clicks on the first result', async (testController) => {
  const testCafePageLink = Selector('.r', testController).nth(0).find('a');
  await testController.click(testCafePageLink);
});

Then(
  'user should be navigated to {string} website',
  async (testController, [origin]) => {
    const getWindowLocation = ClientFunction(() => window.location);
    const navigatedPage = await getWindowLocation();
    await testController.expect(navigatedPage.origin).eql(origin);
  }
);
