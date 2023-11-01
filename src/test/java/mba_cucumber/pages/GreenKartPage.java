package mba_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class GreenKartPage extends PageObject{
    @FindBy(xpath = "(//div[@class='product-action'])[1]")
    private WebElement brocolli;
    @FindBy(xpath = "(//div[@class='product-action'])[2]")
    private WebElement cauliflower;
    @FindBy(xpath = "(//div[@class='product-action'])[3]")
    private WebElement cucumber;
    @FindBy(xpath = "(//div[@class='product-action'])[4]")
    private WebElement beetroot;
    @FindBy(xpath = "(//div[@class='product-action'])[5]")
    private WebElement carrot;
    @FindBy(xpath = "(//div[@class='product-action'])[6]")
    private WebElement tomato;
    @FindBy(xpath = "(//div[@class='product-action'])[7]")
    private WebElement beans;
    @FindBy(xpath = "(//div[@class='product-action'])[8]")
    private WebElement brinjal;
    @FindBy(xpath = "(//div[@class='product-action'])[9]")
    private WebElement capsicum;
    @FindBy(xpath = "(//div[@class='product-action'])[10]")
    private WebElement mushroom ;
    @FindBy(xpath = "(//div[@class='product-action'])[11]")
    private WebElement potato;
    @FindBy(xpath = "(//div[@class='product-action'])[12]")
    private WebElement pumkin;
    @FindBy(xpath = "(//div[@class='product-action'])[13]")
    private WebElement corn;
    @FindBy(xpath = "(//div[@class='product-action'])[14]")
    private WebElement onion;
    @FindBy(xpath = "(//div[@class='product-action'])[15]")
    private WebElement apple;
    @FindBy(xpath = "(//div[@class='product-action'])[16]")
    private WebElement banana;
    @FindBy(xpath = "(//div[@class='product-action'])[17]")
    private WebElement grapes;
    @FindBy(xpath = "(//div[@class='product-action'])[18]")
    private WebElement mango;
    @FindBy(xpath = "(//div[@class='product-action'])[19]")
    private WebElement muskMelon;
    @FindBy(xpath = "(//div[@class='product-action'])[20]")
    private WebElement orange;
    @FindBy(xpath = "(//div[@class='product-action'])[21]")
    private WebElement pears;
    @FindBy(xpath = "(//div[@class='product-action'])[22]")
    private WebElement pomegranate;
    @FindBy(xpath = "(//div[@class='product-action'])[23]")
    private WebElement rasberry;
    @FindBy(xpath = "(//div[@class='product-action'])[24]")
    private WebElement strawberry;
    @FindBy(xpath = "(//div[@class='product-action'])[25]")
    private WebElement waterMelon;
    @FindBy(xpath = "(//div[@class='product-action'])[26]")
    private WebElement almonds;
    @FindBy(xpath = "(//div[@class='product-action'])[27]")
    private WebElement pista;
    @FindBy(xpath = "(//div[@class='product-action'])[28]")
    private WebElement nutsMixture;
    @FindBy(xpath = "(//div[@class='product-action'])[29]")
    private WebElement cashews;
    @FindBy(xpath = "(//div[@class='product-action'])[30]")
    private WebElement walnuts;
    @FindBy(xpath = "//div[@class='product-action']")
    private List<WebElement> products;
    @FindBy(xpath = "//img[@src='https://rahulshettyacademy.com/seleniumPractise/images/bag.png']")
    private WebElement sepet;
    @FindBy(xpath = "//button[text()='PROCEED TO CHECKOUT']")
    private WebElement checkoutButton;
    @FindBy(xpath = "//div[text()='30']")
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
        for (WebElement product:products) {
            product.click();
        }
    }
    public void clickSepet() {
        sepet.click();
    }
    public void clickcheckoutButton()
    {
        checkoutButton.click();
    }
    public void getNumberOfItems()
    {
        noOfItems.getText();
    }
    public void clickButtonPlaceOrder(){
        placeOrderButton.click();
    }
    public void selectInputIsDisabled(){
        choeseCountry.isEnabled();
    }
    public void selectCountry() throws InterruptedException {
        Select select = new Select(choeseCountry);
        select.selectByValue("Spain");
        Thread.sleep(3000);

    }
    public void clickAgreeCheckBox(){
        checkBox.click();
    }
    public void clickButtonProceed(){
        proceedButton.click();
    }
    public void getFinalMessage(){
        finalMessage.getText();
    }































    }

