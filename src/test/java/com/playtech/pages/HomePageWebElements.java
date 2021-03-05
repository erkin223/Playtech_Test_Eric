package com.playtech.pages;

import com.playtech.utilities.Driver;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePageWebElements {

    public HomePageWebElements() {

        PageFactory.initElements(Driver.get(), this);


    }



    @FindBy(xpath = "(//a[@class='btn btn-default'])[1]")
    public WebElement aboutUsBTN;

    @FindBy(id = "close-cookie")
    public WebElement closeCookie;


    @FindBy(css = ".form-control")
    public List<WebElement> age;


    @FindBy(css = ".btn.btn-default.submit")
    public WebElement enterBtn;


    @FindBy(css = ".age-error")
    public WebElement ageErrorMessage;


    public WebElement ageNavigate(String age){
        String ageInfo=age;

        return Driver.get().findElement(By.name(ageInfo));


    }


}
