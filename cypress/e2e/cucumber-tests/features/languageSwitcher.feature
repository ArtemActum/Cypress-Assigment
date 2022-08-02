Feature: Language Switcher

    Scenario: Language Switcher Switches Language Correctly.
        Given I open HomePage.
        When I Switch Language to simple Chinese.
        Then Url should include attribute.

        