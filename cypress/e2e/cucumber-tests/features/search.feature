Feature: Search

    Scenario: Check if search is working
        Given I open Home Page.
        When I add "<text>" to search input.
        Then Check in url this "<text>".
        Examples:
            | text  |
            | Test  |
            | Lorem |



