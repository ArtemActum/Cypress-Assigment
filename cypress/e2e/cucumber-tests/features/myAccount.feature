Feature: MyAccount

#TW2-272
    Scenario: Verify submenu functionality
        Given I log in to MyC
        When I view the submenu sections.
        Then the sections should be clickable and be displayed correctly.

    Scenario: Verify 25% KYC progress bar
        Given I log in to MyC by account with 25% of KYC
        When I view the 25% KYC progress bar.
        Then KYC progress bar should be displayed correctly.   

    Scenario: Verify 50% KYC progress bar
        Given I log in to MyC by account with 50% of KYC
        When I view the KYC progress bar.
        Then KYC progress bar should have 50% of KYC  

    Scenario: Verify 75% KYC progress bar
        Given I log in to MyC by account with 75% of KYC
        When I view the KYC progress bar.
        Then KYC progress bar should have 75% of KYC 

    Scenario: Verify 100% KYC progress bar
        Given I log in to MyC by account with 100% of KYC
        Then I am not able to see the KYC progress bar  

    Scenario: Contact Client Services leads to FAQ page
        Given I log in to MyC by account with 25% of KYC
        When Hover cursor over the information icon next to the profile status
        When I click on contact-client-services link.
        Then FAQ page is opened.

              


