package mba_cucumber.step_definitions;

import io.cucumber.java.en.Given;
import mba_cucumber.utilities.ConfigReader;
import mba_cucumber.utilities.Driver;

public class GreenKartAnaSayfa {

    @Given("Kullanici {string} sitesine gider")
    public void kullanici_sitesine_gider(String url) {
        Driver.getDriver().get(ConfigReader.getProperties(url));
    }
}
