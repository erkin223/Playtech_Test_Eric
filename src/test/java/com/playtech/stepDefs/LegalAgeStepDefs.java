package com.playtech.stepDefs;

import com.playtech.pages.HomePageWebElements;
import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

import java.util.Map;

public class LegalAgeStepDefs {

    HomePageWebElements homePageWebElements = new HomePageWebElements();

    @Given("user enters following age information")
    public void user_enters_following_age_information(Map<String, String> ageInfo) {


        for (String keys : ageInfo.keySet()) {

            Select select = new Select(homePageWebElements.ageNavigate(keys));
            select.selectByValue(ageInfo.get(keys));

        }


    }

    @Given("user click Enter Site button")
    public void user_click_Enter_Site_button() {

        homePageWebElements.enterBtn.click();


    }

    @Then("the error message should not display on the screen")
    public void the_error_message_should_not_display_on_the_screen() {

        Assert.assertFalse(homePageWebElements.ageErrorMessage.isDisplayed());

    }

    @Then("the error message should  display on the screen")
    public void the_error_message_should_display_on_the_screen() {

        Assert.assertTrue(homePageWebElements.ageErrorMessage.isDisplayed());

    }

    @Then("user should close cookies")
    public void user_should_close_cookies() {
        homePageWebElements.closeCookie.click();

    }





}
