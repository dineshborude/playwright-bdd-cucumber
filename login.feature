Feature: Login functionality



  Scenario: Successful login with valid credentials
    Given when i navigate to "https://ecommerce-playground.lambdatest.io/"
    And I click on "My Account"
    When the user enters a valid "qa.danny@yopmail.com" and "Imp@2026"
    And clicks on the login button
    Then the user should be redirected to the My Account page
    And i should verify url contains "route=account/account"


  