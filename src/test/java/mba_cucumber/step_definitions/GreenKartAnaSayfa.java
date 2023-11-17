package mba_cucumber.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import mba_cucumber.pages.GreenKartPage;
import mba_cucumber.utilities.ConfigReader;
import mba_cucumber.utilities.Driver;
import org.junit.Assert;

public class GreenKartAnaSayfa {

    GreenKartPage greenKartPage = new GreenKartPage();

    @Given("Kullanici {string} sitesine gider")
    public void kullanici_sitesine_gider(String url) {
        Driver.getDriver().get(ConfigReader.getProperties(url));
    }


    @When("Kullanıcı {string} adlı bir ürünü arar")
    public void kullanıcı_adlı_bir_ürünü_arar(String string) throws InterruptedException {
        greenKartPage.setSearchBox("Cucumber");



    }

    @When("Kullanıcı {string} ürününü sepete ekler")
    public void kullanıcı_ürününü_sepete_ekler(String string) throws InterruptedException {
        greenKartPage.setAddToBasket();

    }

    @When("Kullanıcı sepete gitmek için sepet simgesine tıklar")
    public void kullanıcı_sepete_gitmek_için_sepet_simgesine_tıklar() throws InterruptedException {
        greenKartPage.basketClick();


    }

    @When("kullanıcı {string} dugmesine tiklar.")
    public void kullanıcı_dugmesine_tiklar(String string) throws InterruptedException {
        greenKartPage.setProccedToCheckout();


    }

    @Then("Kullanıcı sepetteki ürünün doğru olduğunu doğrular")
    public void kullanıcı_sepetteki_ürünün_doğru_olduğunu_doğrular() throws InterruptedException {
        Assert.assertTrue(greenKartPage.setAssertionText().contains("Cucumber - 1 Kg"));


    }

    @When("kullanıcı {string} simgesine tiklar")
    public void kullanıcı_simgesine_tiklar(String string) throws InterruptedException {
        greenKartPage.setPlaceOrder();


    }

    @When("kullanıcı {string} üzerine tıklar")
    public void kullanıcı_üzerine_tıklar(String string) throws InterruptedException {
        greenKartPage.setSelectCountry();


    }

    @When("kullanıcı bir ülkeyi seçer")
    public void kullanıcı_bir_ülkeyi_seçer() {greenKartPage.setAfghanistan();

    }

    @When("kullanıcı  {string} işaretler.")
    public void kullanıcı_işaretler(String string) throws InterruptedException {
        greenKartPage.setTermsAndConditions();


    }
    @When("kullanıcı {string} duğmesine tiklar")
    public void kullanıcı_duğmesine_tiklar(String string) {
        greenKartPage.setProccedButton();
    }
   @Then("kullanıcı alışverişi başarıyla tamamladığını doğrular.")
    public void kullanıcı_alışverişi_başarıyla_tamamladığını_doğrular() throws InterruptedException {
       String actual = greenKartPage.setFinalmessage();
       String expected = "Thank you, your order has been placed successfully\n" +
               "You'll be redirected to Home page shortly!!";
       Assert.assertEquals("başarıyla tamamlanamadı", expected, actual);




   }
}