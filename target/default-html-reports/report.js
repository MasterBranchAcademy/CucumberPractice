$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Pagination.feature");
formatter.feature({
  "name": "GreenKart Pagnation test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Greenkart Pagnation sayfasini test etme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Pagination"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici \"pagination_url\" sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "GreenKartAnaSayfa.kullanici_sitesine_gider(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici 2 sayfasina tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sayfasina_tiklar(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Oncesi butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_oncesi_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Sonraki butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sonraki_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Birinci butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_birinci_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Son butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_son_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Sayfalarin saglikli bir sekilde degistigini Sayfa4 ile dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "PaginationStepDefinition.kullanici_sayfalarin_saglikli_bir_sekilde_degistigini_sayfa_ile_dogrular(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});