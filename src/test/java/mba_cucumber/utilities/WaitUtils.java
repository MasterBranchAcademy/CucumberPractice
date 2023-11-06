package mba_cucumber.utilities;

import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.time.Duration;


public class WaitUtils {




    public static WebElement waitForVisibility(WebElement element) {
        WebDriverWait wait = new WebDriverWait(Driver.getDriver(), Duration.ofSeconds(20));
        return wait.until(ExpectedConditions.visibilityOf(element));
    }
    public static void wait(int secs) {
        try {
            Thread.sleep(1000L * secs);
        } catch (TimeoutException | NoSuchElementException | StaleElementReferenceException | InterruptedException e) {
            e.printStackTrace();
        }
    }
}

