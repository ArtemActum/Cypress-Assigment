Feature: Search

    Scenario: Check if search is working
        Given I open Home Page.
        When I add "text" to search input.
        Then Check search result items.
        Examples:
            | text |
            | Test |

    Scenario: Check if special chars does not work
        Given I open Home Page.
        When I add special char to search input.
        Then Check search result items.


