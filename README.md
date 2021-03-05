# Playtech_Test_Eric
#BDD Cucumber-UI-Automation-Test
 * Cucumber (version 5.7.0)
 * Maven (version 3.6.3)
 * Gherkin Language
 * IntelliJ (IDE)
 * Java (version 1.8)
 * Selenium WebDriver (version 3.141.59)
 * POM (page object module)
 ### Project Structure
 * POM  src/test/java/com/playtech/pages
 * Test Run class  src/test/java/com/playtech/runners
 * Test step definitions  src/test/java/com/playtech/stepDefs
 * Utilities  src/test/java/com/playtech/utilities
 * Test Scenarios  src/test/resources/features
 * Dependency & Plugin pom.xml
 * Important Credential configuration.properties
  ## scenarios include
    * Scenario: US1 AC1 age functionality validation (happy path)
    * Scenario : US1 AC2 age functionality validation for under ages (negative test)
    * Scenario: US1 AC3 age functionality validation without input (negative test)
    * Scenario: US2 AC1 verify displayed numbers (happy path)
    * Scenario: US2 AC2 verify displayed numbers (negative test)
 ### Running Tests
 In order to execute the automation suite navigate to the Project directory within Terminal/CMD window and run the command:
  ```
  # Before executing command from Terminal/CMD make sure to install mvn in your OS. 
  #before running the test from Terminal/CMD be sue be inside the correct project folder
   mvn clean verify
   mvn clean verify -Dbrowser=chrome ( you can change the browser firefox or safari ..cross-browser testing can be achived by this way)
   mvn clean verify -Dcucumber.options="--tags @Test"
   mvn clean verify -Dcucumber.options="--tags @Test" -Dbrowser=chrome
   mvn clean verify -Dcucumber.options="--tags @Test" -Dbrowser=firefox
   mvn clean verify -Dcucumber.options="--tags @Test" -Dbrowser=safari
   ...
-or
1.on project inside **runners/CukesRunner** class
2.on project inside **src/test/resources/features** file
```
 ### Reporting
  * After the test execution you can find generated HTML Report in `/target/cucumber-html-reports` folder
