package mba_cucumber.step_definitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import mba_cucumber.pages.GreenKartPage;
import mba_cucumber.pages.PageObject;
import mba_cucumber.utilities.ConfigReader;
import mba_cucumber.utilities.Driver;
import org.junit.Assert;

public class UrunEkle_StepD extends PageObject {

    GreenKartPage greenKartPage = new GreenKartPage();

    @Given("Kullanici greenkart_url sitesine gider")
    public void kullaniciSitesineGider() {
        Driver.getDriver().get(ConfigReader.getProperties("url"));

    }

    @When("products add to chart butonuna tiklar")
    public void addToChartButonunaTiklar() {
        greenKartPage.clickAllProducts();
    }


    @And("sepete tiklar")
    public void sepeteTiklar() {
        greenKartPage.clickSepet();
    }

    @And("checkout butonuna tiklar")
    public void checkoutButonunaTiklar() {
        greenKartPage.clickcheckoutButton();
    }

    @And("Secilen tum urunlerin sepette oldugunu dogrular")
    public void secilenTumUrunlerinSepetteOldugunuDogrular() {
        String actualItems = greenKartPage.getNumberOfItems();
        Assert.assertEquals("Sepete eklenen urunler hatali", "30", actualItems);
    }

    @And("Place Order butonuna tiklar")
    public void placeOrderButonunaTiklar() {
        greenKartPage.clickPlaceOrderButton();
    }


    @When("Kullanici Select butonuna tiklar")
    public void kullaniciSelectButonunaTiklar() {
        greenKartPage.clickSelectButton();
    }


    @And("Kullanici bir ulke secer")
    public void kullaniciBirUlkeSecer() {
        greenKartPage.selectCountry();
    }

    @And("Kullanici checkbox butonuna tiklar")
    public void kullaniciCheckboxButonunaTiklar() {
        greenKartPage.clickAgreeCheckBox();
    }

    @And("Kullanici Proceed butonuna tiklar")
    public void kullaniciProceedButonunaTiklar() {
        greenKartPage.clickButtonProceed();
    }

    @Then("Kullanici siparisi basariyla tamamladigini dogrular")
    public void kullaniciSiparisiBasariylaTamamladiginiDogrular() {
        String actualMessage = greenKartPage.getFinalMessage();
        Assert.assertEquals("Thank you, your order has been placed successfully\n" +
                "You'll be redirected to Home page shortly!!", greenKartPage.getFinalMessage());
    }
}
