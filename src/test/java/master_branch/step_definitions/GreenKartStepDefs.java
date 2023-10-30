package master_branch.step_definitions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import master_branch.pages.GreenKartPage;
import master_branch.utilities.ConfigReader;
import master_branch.utilities.Driver;
import org.junit.Assert;

public class GreenKartStepDefs {
        GreenKartPage greenKartPage = new GreenKartPage();

    @Given("kullanici {string} sitesine gider")
    public void kullanici_sitesine_gider(String url) {
        Driver.getDriver().get(ConfigReader.getProperties(url));

    }

    @Then("kullanici ana sayfanın başarıyla göründüğünü {string} yazisi ile doğrular")
    public void kullanici_ana_sayfanın_başarıyla_göründüğünü_yazisi_ile_doğrular(String expectedTitle) {
        String actualTitle = greenKartPage.getGreenKartText();
        Assert.assertEquals("Title esit degil", expectedTitle, actualTitle);
    }
}
