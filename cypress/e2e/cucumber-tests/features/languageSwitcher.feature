Feature: Language Switcher

    Scenario: Language Switcher Switches Language Correctly.
        Given I open HomePage.
        When I Switch Language to "<language>".
        Then Html Lang Atribute is "<languageAttribute>".
        Examples:
            | language      | languageAttribute |
            | chinese       | zh                |
            | simpleChinese | zh-CN             |