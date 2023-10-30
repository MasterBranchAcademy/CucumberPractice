/* package com.utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.safari.SafariDriver;

public class Driver {
        private Driver (){

        }
        private static WebDriver driver;
        public static WebDriver getDriver(){
            if (driver == null) {
                String browser = ConfigReader.getProperties("browser");
                switch (browser) {
                    case "chrome":
                        System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
                       // WebDriverManager.chromedriver().setup();
                        driver = new ChromeDriver();
                        break;
                    case "chrome-headless":
                        WebDriverManager.chromedriver().setup();
                        driver = new ChromeDriver(new ChromeOptions().setHeadless(true));
                        break;
                    case "firefox":
                        WebDriverManager.firefoxdriver().setup();
                        driver = new FirefoxDriver();
                        break;
                    case "firefox-headless":
                        WebDriverManager.firefoxdriver().setup();
                        driver = new FirefoxDriver(new FirefoxOptions().setHeadless(true));
                        break;

                    case "safari":
                        if (!System.getProperty("os.name").toLowerCase().contains("windows"))
                            throw new WebDriverException("your os does not support Internet Explorer");
                        WebDriverManager.safaridriver().setup();
                        driver = new SafariDriver();
                        break;
                    case "ie":
                        if (!System.getProperty("os.name").toLowerCase().contains("windows"))
                            throw new WebDriverException("your os does not support Internet Explorer");
                        WebDriverManager.iedriver().setup();
                        driver = new InternetExplorerDriver();
                        break;

                    case "edge":
                        if (!System.getProperty("os.name").toLowerCase().contains("windows"))
                            throw new WebDriverException("your os does not support Internet Explorer");
                        WebDriverManager.edgedriver().setup();
                        driver = new EdgeDriver();
                        break;


                }
            }
            return driver;
        }
        public static void closeDriver(){
            if (driver!=null){
                driver.quit();
                driver = null;
            }
        }

}*/

package master_branch.utilities;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.net.MalformedURLException;
import java.net.URL;

public class Driver {
    private Driver() {

    }

    private static InheritableThreadLocal<WebDriver> driverPool = new InheritableThreadLocal<>();
    public static WebDriver getDriver() {

        if (driverPool.get() == null) {

           String browser = ConfigReader.getProperties("browser");
            switch (browser) {
                case "chrome":
                    System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
                    driverPool.set(new ChromeDriver());
                    break;
                case "chrome-headless":
                    WebDriverManager.chromedriver().setup();
                    driverPool.set(new ChromeDriver(new ChromeOptions().setHeadless(true)));
                    break;
                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver());
                    break;
                case "firefox-headless":
                    WebDriverManager.firefoxdriver().setup();
                    driverPool.set(new FirefoxDriver(new FirefoxOptions().setHeadless(true)));
                    break;
                case "ie":
                    if (!System.getProperty("os.name").toLowerCase().contains("windows"))
                        throw new WebDriverException("Your OS doesn't support Internet Explorer");
                    WebDriverManager.iedriver().setup();
                    driverPool.set(new InternetExplorerDriver());
                    break;
                case "edge":
                    if (!System.getProperty("os.name").toLowerCase().contains("windows"))
                        throw new WebDriverException("Your OS doesn't support Edge");
                    WebDriverManager.edgedriver().setup();
                    driverPool.set(new EdgeDriver());
                    break;
                case "safari":
                    if (!System.getProperty("os.name").toLowerCase().contains("mac"))
                        throw new WebDriverException("Your OS doesn't support Safari");
                    WebDriverManager.getInstance(SafariDriver.class).setup();
                    driverPool.set(new SafariDriver());
                    break;
                case "remote_chrome":

                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("--no-sandbox");
                    //options.addArguments("--headless");
                    try {
                        driverPool.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), options));
                    }catch (MalformedURLException e){
                        e.printStackTrace();
                    }
                    break;
                case "remote_firefox":
                    FirefoxOptions options2 = new FirefoxOptions();
                    options2.addArguments("--no-sandbox");
                   // options2.setHeadless(true);
//                    options2.addArguments("--headless");

                    try {
                        driverPool.set(new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), options2));
                    }catch (MalformedURLException e){
                        e.printStackTrace();
                    }
                    break;
            }
        }
        return driverPool.get();
    }



    public static void closeDriver() {
        driverPool.get().quit();
        driverPool.remove();
    }
}
