package mba_cucumber.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PageAdd extends PageObject {
    @FindBy(xpath = "//*[text()='Beetroot - 1 Kg']/..//button")
    private WebElement beetroot;

    @FindBy(xpath = "//*[text()='Beetroot - 1 Kg']/..//a[@class='increment']")
    private WebElement beetrootIncrement;

    @FindBy(xpath = ("//*[text()='Pumpkin - 1 Kg']/..//button"))
    private WebElement pumpkin;

    @FindBy(xpath = ("//*[text()='Pomegranate - 1 Kg']/..//button"))
    private WebElement pomegranate;

    @FindBy(css = "a.cart-icon")
    private WebElement sepeteGit;

    @FindBy(xpath = ("//div[@class='product-total']/p[text()='3']"))
    private WebElement quantity;

    @FindBy(xpath = ("//div[@class='product-total']/p[text()='1']"))
    private WebElement pupkinQuantity;

    @FindBy(xpath = ("(//div[@class='product-total']/p[text()='1'])[2]"))
    private WebElement pomegranateQuantity;

//*******************************************

    public void beetrootclick() {
        beetroot.click();
    }

    public void BeetrootIncrement() {
        beetrootIncrement.click();
    }

    public void PumpkinClick() {
        pumpkin.click();
    }

    public void PomegranateClick() {
        pomegranate.click();
    }

    public void sepeteGitClick() {
        sepeteGit.click();
    }

    public String beetrootQuantity3() {
        return quantity.getText();
    }

    public String pupkinuantity1() {
        return pupkinQuantity.getText();
    }
    public String PomegranateQaquantity1() {
        return pomegranateQuantity.getText();
    }
}
