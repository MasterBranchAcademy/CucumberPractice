package mba_cucumber.step_definitions;


import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import mba_cucumber.utilities.Driver;

import java.time.Duration;

public class Hooks {

    protected static WebDriver driver;
    protected static WebDriverWait wait;

    @Before
    public void setUp(){
        driver = Driver.getDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(100));
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }

   @After
    public void closeDriver(){
        Driver.closeDriver();
    }
}
