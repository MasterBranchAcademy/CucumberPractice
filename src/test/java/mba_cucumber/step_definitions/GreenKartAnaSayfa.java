package mba_cucumber.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import mba_cucumber.pages.GreenKartPage;
import mba_cucumber.utilities.ConfigReader;
import mba_cucumber.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.support.ui.WebDriverWait;

import static java.lang.Thread.*;

public class GreenKartAnaSayfa {

    GreenKartPage greenKartPage = new GreenKartPage();


    @Given("Kullanici {string} sitesine gider")
    public void kullanici_sitesine_gider(String url) {
        Driver.getDriver().get(ConfigReader.getProperties(url));

    }

    @Then("Kullanici ana sayfanın başarıyla göründüğünü {string} yazisi ile doğrular")
    public void kullanici_ana_sayfanın_başarıyla_göründüğünü_yazisi_ile_doğrular(String expectedTitle) {
        String actualTitle = greenKartPage.getGreenKartText();
        Assert.assertEquals("Title is not equals", expectedTitle, actualTitle);
    }

    @Then("Kullanici cucumber urununu sepete ekler")
    public void kullanici_cucumber_urununu_sepete_ekler() {
        greenKartPage.addToCart();

    }


    @When("Kullanici sepete tiklar")
    public void kullanici_sepete_tiklar() {
        greenKartPage.clickToCartt();

    }


    @Then("Kullanici urunun cucumber urunu oldugunu {string} mesaji ile dogrular")
    public void kullanici_urunun_cucumber_urunu_oldugunu_mesaji_ile_dogrular(String expectedText) {

        String actualText = greenKartPage.elementText();
        Assert.assertEquals("texts are not equals", expectedText, actualText);


    }

    @Then("Kullanici urunu sepetten kaldirir")
    public void kullanici_urunu_sepetten_kaldirir() {

        greenKartPage.removeCucumber();

    }


    @Then("Kullanici sepetin bos oldugunu {string}  mesaj ile dogrular")
    public void kullanici_sepetin_bos_oldugunu_mesaj_ile_dogrular(String expectedText) {
        String actualText = greenKartPage.emptyCartText();
        Assert.assertEquals("texts are not equals", expectedText, actualText);
    }


}

