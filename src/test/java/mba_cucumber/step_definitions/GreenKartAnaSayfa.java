package mba_cucumber.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import mba_cucumber.pages.GreenKartPage;
import mba_cucumber.utilities.ConfigReader;
import mba_cucumber.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class GreenKartAnaSayfa {

    GreenKartPage greenKartPage = new GreenKartPage();

    @Given("Kullanici {string} sitesine gider")
    public void kullanici_sitesine_gider(String url) {

        Driver.getDriver().get(ConfigReader.getProperties("greenkart_url"));
    }

    @Then("Kullanici urun arama kutusuna gider")
    public void kullanici_urun_arama_kutusuna_gider() throws InterruptedException {
        WebElement aramaKutusu = Driver.getDriver().findElement(By.xpath("//*[@type='search']"));
        aramaKutusu.click();
        Thread.sleep(3000);
    }

    @When("KUllanici {string} icin Arama yapar")
    public void kullanici_icin_Arama_yapar(String urun) throws InterruptedException {
        WebElement urunIsmileri = Driver.getDriver().findElement(By.xpath("//*[@type='search']"));
        urunIsmileri.sendKeys(urun);
        Thread.sleep(3000);
        urunIsmileri.sendKeys(Keys.RETURN);
    }

    @Then("sonuclarin {string} icerdigini dogrular")
    public void sonuclarin_icerdigini_dogrula(String urunIsmi) {
        WebElement sonucBildirimi = Driver.getDriver().findElement(By.xpath("//*[@class='products-wrapper']/div"));
        String sonuc = sonucBildirimi.getText();
        Assert.assertTrue(sonuc.contains(urunIsmi));
    }


}
