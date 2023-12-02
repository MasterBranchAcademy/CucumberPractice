package mba_cucumber.pages;

import mba_cucumber.utilities.WaitUtils;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;


public class GreenKartPage extends PageObject {

    @FindBy(xpath = "//div[@class='product-action']")
    private List<WebElement> allProducts;
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
        for (WebElement product : allProducts) {
            product.click();
        }
    }

    public void setAllProducts() {
        for (WebElement product : allProducts) {
            product.click();

            String expectedText = "✔ ADDED";
            String actualText = product.getText();
            Assert.assertEquals("ADD TO CART texti degismedi",expectedText,actualText);
            WaitUtils.wait(5);
            WaitUtils.waitForVisibility(product);

            //Kartlardaki metinleri tekrar karşılaştırıp ,dogrulama yapiyorum
            String expectedText1 = "ADD TO CART";
            String actualText1 = product.getText();
            Assert.assertEquals("ADDED texti degismedi", expectedText1, actualText1);
        }

    }

    public void getClickSepet() {
        scrollAndClick(sepet);
    }

    public void clickCheckoutButton() {scrollAndClick(checkoutButton);}

    public String getNumberOfItems() {return noOfItems.getText();}

    public void clickPlaceOrderButton() {
        placeOrderButton.click();
    }


    public void clickSelectButton() {
        scrollAndClick(choeseCountry);
    }

    public void selectCountry() {
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

    public String getRequiredMessage() {
        scrollInto(message);
        return message.getText();
    }

}

