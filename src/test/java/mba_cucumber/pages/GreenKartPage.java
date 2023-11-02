package mba_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class GreenKartPage extends PageObject {
    @FindBy(xpath = "(//div[@class='product-action'])[1]")
    private WebElement brocolli;
    @FindBy(xpath = "//div[@class='product-action']")
    private List<WebElement> products;
    @FindBy(xpath = "//img[@src='https://rahulshettyacademy.com/seleniumPractise/images/bag.png']")
    private WebElement sepet;
    @FindBy(xpath = "//button[text()='PROCEED TO CHECKOUT']")
    private WebElement checkoutButton;
    @FindBy(xpath = "//*[text()='30']")
    private WebElement noOfItems;
    @FindBy(xpath = "//button[text()='Place Order']")
    private WebElement placeOrderButton;
    @FindBy(xpath = "//select[@style='width: 200px;']")
    private WebElement choeseCountry;
    @FindBy(xpath = "//b[text()='Please accept Terms & Conditions - Required']")
    private WebElement message;
    @FindBy(xpath = "//input[@type='checkbox']")
    private WebElement checkBox;
    @FindBy(xpath = "//button[text()='Proceed']")
    private WebElement proceedButton;
    @FindBy(xpath = "//span[text()='Thank you, your order has been placed successfully ']")
    private WebElement finalMessage;

    ////////////////**METHODS**////////////////////
    public void clickAllProducts() {
        for (WebElement product : products) {
            product.click();
        }
    }

    public void clickSepet() {
        scrollAndClick(sepet);
    }

    public void clickcheckoutButton() {

        scrollAndClick(checkoutButton);
    }

    public String getNumberOfItems() {
     return noOfItems.getText();

    }

    public void clickPlaceOrderButton() {
        placeOrderButton.click();
    }

    public void selectInputIsDisabled() {
        choeseCountry.isEnabled();
    }
    public void clickSelectButton(){
        scrollAndClick(choeseCountry);
    }

    public void selectCountry()  {
        Select select = new Select(choeseCountry);
        select.selectByValue("Spain");
    }

    public void clickAgreeCheckBox() {
        checkBox.click();
    }

    public void clickButtonProceed() {
        proceedButton.click();
    }

    public String getFinalMessage() {
       scrollInto(finalMessage);
       return finalMessage.getText();
    }

}

