Feature: Green Cart

  @Pagination
  Scenario: Ürünün sayisini sepette kontrol etme

    Given Kullanici "greenkart_url" sitesine gider
    And Kullanici beetroot urununu artirir
    When Kullanici beetroot urununu sepete ekler
    When Kullanici pupkin urununu sepete ekler
    When Kullanici pomegranate urununu sepete ekler
    And Kullanici sepete gider
    Then Kullanici urunlerin dogru bir sekilde sepete eklendigini dogrular
