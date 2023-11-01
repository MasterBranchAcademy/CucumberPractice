

  Feature: Siparis tamamlama

    @sparisTamamlama
    Scenario: Bir kullanici gibi siparis verebilme
      Given Kullanici "greenkart_url" sitesine gider
      When "products" add to chart butonuna tiklar

