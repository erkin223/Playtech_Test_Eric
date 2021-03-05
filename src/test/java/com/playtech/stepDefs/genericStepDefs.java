package com.playtech.stepDefs;

import com.playtech.utilities.Driver;
import io.cucumber.java.en.Given;
import org.junit.Assert;

public class genericStepDefs {

    @Given("^User on the (.*) page$")
    public void validationOfPage (String expectedPageTitle) throws InterruptedException {

        String url= Driver.get().getCurrentUrl();
        System.out.println("Home Page"+url);

        String actualPageTitle=Driver.get().getTitle();
        System.out.println("The page title is "+ actualPageTitle);
        Thread.sleep(1000);

        Assert.assertTrue(actualPageTitle.contains(expectedPageTitle));




    }

}
