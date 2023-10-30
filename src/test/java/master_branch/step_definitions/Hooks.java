package master_branch.step_definitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import master_branch.utilities.Driver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.concurrent.TimeUnit;

public class Hooks {
    protected WebDriver driver;
    protected WebDriverWait wait;
    @Before
    public void setUp(){
        driver = Driver.getDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
        wait = new WebDriverWait(driver, Duration.ofSeconds(30));

    }

    @After
    public void closeDriver(){

        //driver.quit();
        Driver.closeDriver();

    }
}
