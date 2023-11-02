package mba_cucumber.pages;


import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import mba_cucumber.utilities.Driver;

import java.util.NoSuchElementException;

public class PageObject {
    public PageObject(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    public void scrollAndClick(WebElement element){
        scrollInto(element);
        element.click();
    }

    public void scrollInto(WebElement element){
        JavascriptExecutor jse = (JavascriptExecutor) Driver.getDriver();

        jse.executeScript("arguments[0].scrollIntoView();", element);
    }

    }

