package master_branch.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class GreenKartPage extends PageObject{


    @FindBy(xpath = "//div[@class='brand greenLogo']")
    private WebElement greenKart;


    //*********** Methods ****************

    public String getGreenKartText(){
        return greenKart.getText();
    }


}
