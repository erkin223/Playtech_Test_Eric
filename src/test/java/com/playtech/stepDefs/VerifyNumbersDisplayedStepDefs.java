package com.playtech.stepDefs;

import com.playtech.pages.HomePageWebElements;
import com.playtech.pages.VerifyNumbersDisplayedWebElements;
import com.playtech.utilities.BrowserUtilities;
import com.playtech.utilities.ConfigurationReader;
import com.playtech.utilities.Driver;


import io.cucumber.java.en.*;
import org.junit.Assert;

import java.util.Map;

public class VerifyNumbersDisplayedStepDefs {

    HomePageWebElements homePageWebElements=new HomePageWebElements();

    VerifyNumbersDisplayedWebElements verifyNumbersDisplayedWebElements=new VerifyNumbersDisplayedWebElements();

    @Given("User enter the Playtech url")
    public void user_enter_the_Playtech_url() {

        Driver.get().get(ConfigurationReader.get("url"));



    }

    @When("user clicks on {string} button")
    public void user_clicks_on_button(String contactUs) {


        homePageWebElements.aboutUsBTN.click();


    }

    @Then("User should be able to see following information")
    public void user_should_be_able_to_see_following_information(Map <String ,String> info) {

        for (String keyText : info.keySet()) {

        String actualNumber=  verifyNumbersDisplayedWebElements.navigate(keyText).getAttribute("data-odometer-count");
        String expectedNumber= info.get(keyText);

        Assert.assertEquals("Verify numbers are displayed",expectedNumber,actualNumber);

            System.out.println(keyText+" = " + expectedNumber);

        }


    }

}
