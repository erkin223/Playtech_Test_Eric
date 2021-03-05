$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/VerifyNumbersDisplayed.feature");
formatter.feature({
  "name": "displayed numbers on contact page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be on the Playtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_should_be_on_the_Playtech_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on the Playtech - the source of success page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.genericStepDefs.validationOfPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US2 AC1 verify displayed numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "user enters following age information",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_enters_following_age_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Enter Site button",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_click_Enter_Site_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message should not display on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.the_error_message_should_not_display_on_the_screen()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat com.playtech.stepDefs.LegalAgeStepDefs.the_error_message_should_not_display_on_the_screen(LegalAgeStepDefs.java:40)\r\n\tat ✽.the error message should not display on the screen(file:///C:/Users/erkin/IdeaProjects/Playtech_Test_Eric/src/test/resources/features/VerifyNumbersDisplayed.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should close cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_should_close_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"about-us\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_clicks_on_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User on the Company Overview PlayTech page",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.genericStepDefs.validationOfPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see following information",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_should_be_able_to_see_following_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User should be on the Playtech home page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_should_be_on_the_Playtech_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User on the Playtech - the source of success page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.genericStepDefs.validationOfPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US2 AC2 verify displayed numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test"
    }
  ]
});
formatter.step({
  "name": "user enters following age information",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_enters_following_age_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click Enter Site button",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_click_Enter_Site_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message should not display on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.the_error_message_should_not_display_on_the_screen()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat com.playtech.stepDefs.LegalAgeStepDefs.the_error_message_should_not_display_on_the_screen(LegalAgeStepDefs.java:40)\r\n\tat ✽.the error message should not display on the screen(file:///C:/Users/erkin/IdeaProjects/Playtech_Test_Eric/src/test/resources/features/VerifyNumbersDisplayed.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user should close cookies",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.LegalAgeStepDefs.user_should_close_cookies()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on \"about-us\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_clicks_on_button(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User on the Company Overview PlayTech page",
  "keyword": "And "
});
formatter.match({
  "location": "com.playtech.stepDefs.genericStepDefs.validationOfPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to see following information",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.playtech.stepDefs.VerifyNumbersDisplayedStepDefs.user_should_be_able_to_see_following_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});