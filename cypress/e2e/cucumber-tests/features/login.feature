Feature: Login

    Scenario: Login into application
        Given I open HomePage.
        When I login to my account.
        Then Check name user and check url.

    Scenario: Should try to login with invalid credentials
        Given I open HomePage.
        When I login to my account with invalid credentials
        Then I get error message that credentials did not match our records.
