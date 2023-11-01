

  Feature: Siparis tamamlama
    @sparisTamamlama
    Scenario: Bir kullanici gibi siparis verebilme
      Given Kullanici "greenkart_url" sitesine gider
      When "Beetroot" add to chart butonuna tiklar
      And 5 saniye "Added" yazisinin gorundugunu dogrular
      And sepet iconuna tiklar
      Then aldigi urunun fiyatini dogrular
