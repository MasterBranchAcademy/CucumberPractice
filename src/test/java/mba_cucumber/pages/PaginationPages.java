package mba_cucumber.pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PaginationPages extends PageObject {

    @FindBy(xpath = "//div[@class='col-xs-8']//ul[@class='pagination pull-right']/li/a/span[text()='2']")
    private WebElement pageNumberButton;


    @FindBy(xpath = "//div[@class='col-xs-8']//ul[@class='pagination pull-right']//a[@aria-label='Previous']")
    private WebElement previousButton;


    @FindBy(xpath = "//a[@aria-label='Next']")
    private WebElement nextButton;


    @FindBy(xpath = "//a[@aria-label='First']")
    private WebElement firstButton;


    @FindBy(xpath = "//a[@aria-label='Last']")
    private WebElement lastButton;


    @FindBy(xpath = "//li[@class='active']//span")
    private WebElement activePage;


    //******** Methods ********//

    public void clickPageNumber(int pageNumber) {
        pageNumberButton.click();
    }

    public void clickPrevious() {
        previousButton.click();
    }

    public void clickNext() {
        nextButton.click();
    }

    public void clickFirst() {
        firstButton.click();
    }

    public void clickLast() {
        lastButton.click();
    }

    public boolean isPageActive(int pageNumber) {
        return activePage.getText().equals(String.valueOf(pageNumber));
    }
}