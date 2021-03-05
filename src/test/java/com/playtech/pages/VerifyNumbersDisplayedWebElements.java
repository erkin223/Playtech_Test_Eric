package com.playtech.pages;

import com.playtech.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class VerifyNumbersDisplayedWebElements {

    public VerifyNumbersDisplayedWebElements() {

        PageFactory.initElements(Driver.get(), this);
    }


    public WebElement navigate(String displayed){

        String path="//div[contains(text(),'"+displayed+"')]/../div[1]";

        return Driver.get().findElement(By.xpath(path));


    }


}
