<<<<<<< HEAD
$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/urunEkle.feature");
formatter.feature({
  "name": "Siparis tamamlama",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Siparis Tamamlama",
  "description": "",
  "keyword": "Background"
=======
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
>>>>>>> 837888c ("Eklenen urunler sepette görünüyor mu" adli taskim.)
});
formatter.before({
  "status": "passed"
});
formatter.step({
<<<<<<< HEAD
  "name": "Kullanici greenkart_url sitesine gider",
=======
  "name": "Kullanici \"greenkart_url\" sitesine gider",
>>>>>>> 837888c ("Eklenen urunler sepette görünüyor mu" adli taskim.)
  "keyword": "Given "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSitesineGider()"
});
formatter.result({
  "status": "passed"
});
<<<<<<< HEAD
formatter.scenario({
  "name": "Kullanici urunleri sectiginde Add To Cart butonunun Added olarak 5 saniye gorundugunu dogrular",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@siparisTamamlama"
    }
  ]
});
formatter.step({
  "name": "Kullanici urunlerin eklendigini bes saniye ana sayfada dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciUrununEklendigiBesSaniyeAnaSayfadaDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Siparis Tamamlama",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici greenkart_url sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSitesineGider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Bir kullanici gibi siparis verebilme",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@siparisTamamlama"
    }
  ]
});
formatter.step({
  "name": "products add to chart butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.addToChartButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sepete tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.sepeteTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checkout butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.checkoutButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Secilen tum urunlerin sepette oldugunu dogrular",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.secilenTumUrunlerinSepetteOldugunuDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Place Order butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.placeOrderButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Select butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSelectButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir ulke secer",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciBirUlkeSecer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici checkbox butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciCheckboxButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Proceed butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciProceedButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici siparisi basariyla tamamladigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSiparisiBasariylaTamamladiginiDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Siparis Tamamlama",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici greenkart_url sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSitesineGider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Kullanici checkBox butonuna tiklamadan siparisi tamamlayamamali",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@siparisTamamlama"
    }
  ]
});
formatter.step({
  "name": "products add to chart butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.addToChartButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sepete tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.sepeteTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checkout butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.checkoutButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Secilen tum urunlerin sepette oldugunu dogrular",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.secilenTumUrunlerinSepetteOldugunuDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Place Order butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.placeOrderButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Select butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSelectButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici bir ulke secer",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciBirUlkeSecer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Proceed butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciProceedButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici siparisi basariyla tamamlayamadigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSiparisiBasariylaTamamlayamadiginiDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Siparis Tamamlama",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici greenkart_url sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSitesineGider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Kullanici bir ulke secmeden ve checkBox butonuna tiklamadan siparisini tamamlayamamali",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@siparisTamamlama"
    }
  ]
});
formatter.step({
  "name": "products add to chart butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.addToChartButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sepete tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.sepeteTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "checkout butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.checkoutButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Secilen tum urunlerin sepette oldugunu dogrular",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.secilenTumUrunlerinSepetteOldugunuDogrular()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Place Order butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.placeOrderButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Select butonuna tiklar",
  "keyword": "When "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSelectButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici Proceed butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciProceedButonunaTiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Kullanici siparisi basariyla tamamlayamadigini dogrular",
  "keyword": "Then "
});
formatter.match({
  "location": "UrunEkle_StepD.kullaniciSiparisiBasariylaTamamlayamadiginiDogrular()"
=======
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
>>>>>>> 837888c ("Eklenen urunler sepette görünüyor mu" adli taskim.)
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});