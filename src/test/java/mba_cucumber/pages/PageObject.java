package mba_cucumber.pages;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import mba_cucumber.utilities.Driver;

public class PageObject {
    public PageObject() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    public void scrollAndclick(WebElement element) {
        scrollInto(element);
        element.click();
    }

    private void scrollInto(WebElement element) {
        JavascriptExecutor jse = (JavascriptExecutor) Driver.getDriver();

        jse.executeScript("arguments[0].scrollIntoView();", element);
    }
}
