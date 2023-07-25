Feature: MyAccount

    Scenario: Verify submenu functionality
        Given I log in to MyC
        When I view the submenu sections.
        Then the sections should be clickable and be displayed correctly.

    Scenario: Verify KYC progress bar
        Given I log in to MyC by account with 25% of KYC
        When I view the KYC progress bar.
        Then KYC progress bar should be displayed correctly.         


