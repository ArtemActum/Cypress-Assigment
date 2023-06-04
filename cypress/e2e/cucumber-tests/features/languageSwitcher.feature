Feature: Language Switcher

    Scenario: Language Switcher Switches Language Correctly.
        Given I open HomePage
        When I Switch "<languages>".
        Then Url should include "<attribute>".
        Examples:
            | languages | attribute  |
            | zh        | lang=zh    |
            | zh-cn     | lang=zh-cn |
            | en        | lang=en    |




