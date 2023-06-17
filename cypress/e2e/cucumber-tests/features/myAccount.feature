Feature: MyAccount

    Background:
        Given I log in to MyC

    Scenario: Verify submenu functionality
        When I view the submenu sections.
        Then the sections should be clickable and be displayed correctly.


