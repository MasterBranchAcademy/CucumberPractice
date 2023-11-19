$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddCheck.feature");
formatter.feature({
  "name": "Green Cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Ürünün sayisini sepette kontrol etme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Zubeyde"
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
  "name": "Kullanici beetroot urununu artirir",
  "keyword": "And "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_beetroot_urununu_artirir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici beetroot urununu sepete ekler",
  "keyword": "When "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_beetroot_urununu_sepete_ekler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici pupkin urununu sepete ekler",
  "keyword": "When "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_urununu_sepete_ekler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici pomegranate urununu sepete ekler",
  "keyword": "When "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_pomegranate_urununu_sepete_ekler()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici sepete gider",
  "keyword": "And "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_sepete_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici urunlerin dogru bir sekilde sepete eklendigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCheckStepDefs.kullanici_urunlerin_dogru_bir_sekilde_sepete_eklendigini_dogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});