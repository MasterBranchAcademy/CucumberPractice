package mba_cucumber.step_definitions;


import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.apache.hc.core5.util.TimeValue;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import mba_cucumber.utilities.Driver;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class Hooks {

    protected static WebDriver driver;
    protected static WebDriverWait wait;

    @Before
    public void setUp(){
        driver = Driver.getDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));
    }

   @After
    public void closeDriver(){
        Driver.closeDriver();
    }
}
