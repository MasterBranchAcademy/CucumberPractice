package mba_cucumber.pages;

import org.junit.Test;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GreenKartPage extends PageObject {


    @FindBy(xpath = "//div[@class='brand greenLogo']")
    private WebElement greenKart;

    @FindBy(xpath = "(//button[@type='button'])[4]")
    private WebElement addToCartCucumber;

    @FindBy(xpath = "//img[@src='https://rahulshettyacademy.com/seleniumPractise/images/bag.png']")
    private WebElement clickToCart;

    @FindBy(xpath = "(//p[@class=\"product-name\"])")
    private WebElement textOfElement;

    @FindBy(xpath = "(//a[@class='product-remove'])[1]")
    private WebElement removeElement;

    @FindBy(xpath = "//h2[1]")
    private WebElement emptyCart;

    //*********** Methods ****************

    public String getGreenKartText() {
        return greenKart.getText();
    }

    public void addToCart() {
        addToCartCucumber.click();
    }

    public void clickToCartt() {
        clickToCart.click();
    }

    public String elementText() {
        return textOfElement.getText();
    }

    public void removeCucumber() {
        removeElement.click();
    }

    public String emptyCartText() {
        return emptyCart.getText();
    }


}


