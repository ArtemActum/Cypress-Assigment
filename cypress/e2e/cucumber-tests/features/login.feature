Feature: Login

    Background:
        Given I open Homepage

    Scenario: Login into application
        When I login to my account.
        Then Check name user and check url.

    Scenario: Should try to login with invalid credentials
        When I login to my account with invalid "<username>" and "<password>".
        Then I get error message that credentials did not match our records.
        Examples:
            | username | password        |
            | testName | secret_password |
            | artem    | secretpassword  |