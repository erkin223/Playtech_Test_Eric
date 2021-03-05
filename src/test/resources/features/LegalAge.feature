@Test

Feature:

  Background:
    When User enter the Playtech url
    Then User on the Playtech - the source of success page

  Scenario: US1 AC1 age functionality validation (happy path)
    Given user enters following age information
      | day   | 12   |
      | month | 05   |
      | year  | 2000 |
    And user click Enter Site button
    Then the error message should not display on the screen
    And user should close cookies


  Scenario:US1 AC2 age functionality validation(negative test)
    Given user enters following age information
      | day   | 12   |
      | month | 05   |
      | year  | 2005 |
    And user click Enter Site button
    Then the error message should  display on the screen


  Scenario:US1 AC3 age functionality validation(negative test)

    Given user click Enter Site button
    Then the error message should  display on the screen