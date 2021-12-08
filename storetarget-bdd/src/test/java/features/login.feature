@SmokeTest
Feature: Login feature

  Scenario: Log in with invalid credentials
    Given User need to enter MAC Address to CableMedic
    When User clicked upgrade, it shows in progress
    Then User has upgraded modem