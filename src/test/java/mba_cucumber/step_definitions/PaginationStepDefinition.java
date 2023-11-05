package mba_cucumber.step_definitions;

import io.cucumber.java.en.*;
import mba_cucumber.pages.PaginationPages;
import org.junit.Assert;

public class PaginationStepDefinition {
    PaginationPages paginationPages = new PaginationPages();

    @When("Kullanici {int} sayfasina tiklar")
    public void kullanici_sayfasina_tiklar(Integer pageNumber) throws InterruptedException {
        paginationPages.clickPageNumber(pageNumber);
        Thread.sleep(3000);
    }

    @And("Kullanici Oncesi butonuna tiklar")
    public void kullanici_oncesi_butonuna_tiklar() throws InterruptedException {
        paginationPages.clickPrevious();
        Thread.sleep(3000);
    }

    @And("Kullanici Sonraki butonuna tiklar")
    public void kullanici_sonraki_butonuna_tiklar() throws InterruptedException {
        paginationPages.clickNext();
        Thread.sleep(3000);
    }

    @And("Kullanici Birinci butonuna tiklar")
    public void kullanici_birinci_butonuna_tiklar() throws InterruptedException {
        paginationPages.clickFirst();
        Thread.sleep(3000);
    }

    @And("Kullanici Son butonuna tiklar")
    public void kullanici_son_butonuna_tiklar() throws InterruptedException {
        paginationPages.clickLast();
        Thread.sleep(3000);
    }

    @Then("Kullanici Sayfalarin saglikli bir sekilde degistigini Sayfa{int} ile dogrular")
    public void kullanici_sayfalarin_saglikli_bir_sekilde_degistigini_sayfa_ile_dogrular(Integer pageNumber) throws InterruptedException {
        Assert.assertTrue(paginationPages.isPageActive(pageNumber));
        Thread.sleep(3000);
    }
}


