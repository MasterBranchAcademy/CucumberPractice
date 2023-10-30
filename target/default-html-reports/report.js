$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/GreenKart.feature");
formatter.feature({
  "name": "GreenKart test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Greenkart sayfasini test etme",
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
formatter.after({
  "status": "passed"
});
});