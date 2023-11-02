
  Feature: Siparis tamamlama

    @sparisTamamlama
    Scenario: Bir kullanici gibi siparis verebilme
      Given Kullanici greenkart_url sitesine gider
      When products add to chart butonuna tiklar
      And sepete tiklar
      And checkout butonuna tiklar
      And Secilen tum urunlerin sepette oldugunu dogrular
      And Place Order butonuna tiklar
      When Kullanici Select butonuna tiklar
      And Kullanici bir ulke secer
      And Kullanici checkbox butonuna tiklar
      And Kullanici Proceed butonuna tiklar
      Then Kullanici siparisi basariyla tamamladigini dogrular

