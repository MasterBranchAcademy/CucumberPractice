package mba_cucumber.step_definitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import mba_cucumber.pages.PageAdd;
import org.junit.Assert;

public class AddCheckStepDefs {
    PageAdd pageAdd = new PageAdd();

    @Given("Kullanici beetroot urununu artirir")
    public void kullanici_beetroot_urununu_artirir() throws InterruptedException {
        pageAdd.BeetrootIncrement();
        pageAdd.BeetrootIncrement();
        Thread.sleep(1000);
    }

    @When("Kullanici beetroot urununu sepete ekler")
    public void kullanici_beetroot_urununu_sepete_ekler() throws InterruptedException {
        pageAdd.beetrootclick();
        Thread.sleep(1000);
    }

    @When("Kullanici pupkin urununu sepete ekler")
    public void kullanici_urununu_sepete_ekler() throws InterruptedException {
        pageAdd.PumpkinClick();
        Thread.sleep(1000);
    }

    @When("Kullanici pomegranate urununu sepete ekler")
    public void kullanici_pomegranate_urununu_sepete_ekler() throws InterruptedException {
        pageAdd.PomegranateClick();
        Thread.sleep(1000);
    }


    @When("Kullanici sepete gider")
    public void kullanici_sepete_gider() throws InterruptedException {
        pageAdd.sepeteGitClick();
        Thread.sleep(1000);

    }

    @Then("Kullanici urunlerin dogru bir sekilde sepete eklendigini dogrular")
    public void kullanici_urunlerin_dogru_bir_sekilde_sepete_eklendigini_dogrular() throws InterruptedException {
        String expectedMessagePupkin = "1 No.";
        String expectedMessagePomegranate = "1 No.";
        String expectedMessageBeetRoot = "3 Nos.";

        Assert.assertEquals("Sepete 1 kilo kabak eklenmedi", pageAdd.pupkinuantity1(), expectedMessagePupkin);
        Assert.assertEquals("Sepete 1 kilo nar eklenmedi", expectedMessagePomegranate, pageAdd.PomegranateQaquantity1());
        Assert.assertEquals("Sepete 3 kilo kirmizi pancar eklenmedi", expectedMessageBeetRoot, pageAdd.beetrootQuantity3());

        Thread.sleep(1000);
    }

}
