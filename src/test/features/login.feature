Feature: Login Functionality

  As a user
  I want to login into the application
  So that I can access my dashboard

  Background:
    Given user is on the login page

  Scenario: Successful login with valid credentials
    When user enters username "rahulshettyacademy" and password "Learning@830$3mK2"
    And clicks on login button
    Then user should be redirected to dashboard

  Scenario: Unsuccessful login with invalid credentials
    When user enters username "wrongUser" and password "wrongPass"
    And clicks on login button
    Then error message should be displayed