@fast @example-tests

Feature: Running Cucumber with TestCafe
  As a user of Google
  I should be able to navigate to TestCafe website
  to learn more about testcafe tool


  Scenario: User should be able to reach to testcafe website
    Given user goes to URL "https://www.google.com/"
    When user fills out the search field with "testcafe"
    When user clicks on the first result
    Then user should be navigated to "https://devexpress.github.io" website