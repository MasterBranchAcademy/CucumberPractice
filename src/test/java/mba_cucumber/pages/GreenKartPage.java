package mba_cucumber.pages;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class GreenKartPage extends PageObject{

    @FindBy(xpath = "//input[@type='search']")
   private WebElement searchBox;


    @FindBy(xpath = "//div[@class='product-action']")
    private WebElement addToCard;

    @FindBy(xpath = "//img[@class=' ']")
    private WebElement basketClick;

    @FindBy(xpath = "//button[text()='PROCEED TO CHECKOUT']")
    private WebElement proccedToCheckout;
    @FindBy(xpath = "//p[@class='product-name']")
    private WebElement assertionText;

    @FindBy(xpath = "//button[text()='Place Order']")
    private WebElement placeOrder;

    @FindBy(xpath = "//select[@style='width: 200px;']")
    private WebElement selectCountry;


    @FindBy(className = "chkAgree")
    private WebElement termsAndConditions;

    @FindBy(xpath= "//button[text()='Proceed']")
    private WebElement proccedButton;

    @FindBy(xpath = "//span[@style='color:green;font-size:25px']")
    private WebElement finalMessage;




    //*********** Methods ****************


    public void setSearchBox(String str){

        searchBox.sendKeys(str, Keys.ENTER);
    }

    public void setAddToBasket(){

        addToCard.click();
    }

    public void basketClick(){
        basketClick.click();
    }

    public void setProccedToCheckout(){
        proccedToCheckout.click();
    }

    public String setAssertionText(){

        return assertionText.getText();

    }

    public void setPlaceOrder(){
        placeOrder.click();
    }

    public void setSelectCountry(){
        scrollAndclick(selectCountry);


    }

    public void setAfghanistan()  {
        Select select = new Select(selectCountry);
        select.selectByValue("Afghanistan");

    }

    public void setTermsAndConditions(){

        termsAndConditions.click();
    }

    public void setProccedButton(){

        proccedButton.click();
    }

    public String setFinalmessage(){
        return finalMessage.getText();


    }
}
