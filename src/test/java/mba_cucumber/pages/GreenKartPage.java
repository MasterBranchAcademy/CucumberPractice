package mba_cucumber.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GreenKartPage extends PageObject {

    @FindBy(xpath = "//*[@type='search']")
    public WebElement searchBox;

    @FindBy(xpath = "//*[@class='products-wrapper']/div")
    public WebElement urunIsmileri;



//*******Methods *****/////

    public WebElement sonucBildirimi(){

        return urunIsmileri;
    }
}