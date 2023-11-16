$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GreenKart.feature");
formatter.feature({
  "name": "GreenKart test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sepeti boşaltma işlemini test etme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@greenkart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici \"greenkart_url\" sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sitesine_gider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici ana sayfanın başarıyla göründüğünü \"GREENKART\" yazisi ile doğrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_ana_sayfanın_başarıyla_göründüğünü_yazisi_ile_doğrular(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici cucumber urununu sepete ekler",
  "keyword": "When "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_cucumber_urununu_sepete_ekler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sepete tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sepete_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici urunun cucumber urunu oldugunu \"Cucumber - 1 Kg\" mesaji ile dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_urunun_cucumber_urunu_oldugunu_mesaji_ile_dogrular(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici urunu sepetten kaldirir",
  "keyword": "And "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_urunu_sepetten_kaldirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sepetin bos oldugunu \"You cart is empty!\"  mesaj ile dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sepetin_bos_oldugunu_mesaj_ile_dogrular(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});