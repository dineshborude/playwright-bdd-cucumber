

Given('when i navigate to {string}', async ({}, arg) => {
  // Step: Given when i navigate to "https://ecommerce-playground.lambdatest.io/"
  // From: login.feature:6:5
});

Given('I click on {string}', async ({}, arg) => {
  // Step: And I click on "My Account"
  // From: login.feature:7:5
});

When('the user enters a valid {string} and {string}', async ({}, arg, arg1) => {
  // Step: When the user enters a valid "qa.danny@yopmail.com" and "Imp@2026"
  // From: login.feature:8:5
});

When('clicks on the login button', async ({}) => {
  // Step: And clicks on the login button
  // From: login.feature:9:5
});

Then('the user should be redirected to the My Account page', async ({}) => {
  // Step: Then the user should be redirected to the My Account page
  // From: login.feature:10:5
});

Then('i should verify url contains {string}', async ({}, arg) => {
  // Step: And i should verify url contains "route=account/account"
  // From: login.feature:11:5
});
``