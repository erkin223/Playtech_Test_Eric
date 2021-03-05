@Test
Feature: displayed numbers on contact page

  Background:
    Given User should be on the Playtech home page
    Then User on the Playtech - the source of success page

  Scenario: US2 AC1 verify displayed numbers

    Given user enters following age information
      | day   | 12   |
      | month | 05   |
      | year  | 2000 |
    And user click Enter Site button
    Then the error message should not display on the screen
    And user should close cookies
    When user clicks on "about-us" button
    And User on the Company Overview PlayTech page
    Then User should be able to see following information
      | Number of Employees                      | 5900 |
      | Number of countries Playtech has offices | 19   |
      | Global licensees                         | 140  |
      | Regulated Jurisdictions                  | 20   |


  Scenario: US2 AC2 verify displayed numbers

    Given user enters following age information
      | day   | 12   |
      | month | 05   |
      | year  | 2000 |
    And user click Enter Site button
    Then the error message should not display on the screen
    And user should close cookies
    When user clicks on "about-us" button
    And User on the Company Overview PlayTech page
    Then User should be able to see following information
      | Number of Employees                      | 5901 |
      | Number of countries Playtech has offices | 19   |
      | Global licensees                         | 140  |
      | Regulated Jurisdictions                  | 20   |

