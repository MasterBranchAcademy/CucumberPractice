Feature: GreenKart test


  @greenkart
  Scenario: Sepeti boşaltma işlemini test etme
    Given Kullanici "greenkart_url" sitesine gider
    Then Kullanici ana sayfanın başarıyla göründüğünü "GREENKART" yazisi ile doğrular
    When Kullanici cucumber urununu sepete ekler
    And Kullanici sepete tiklar
    Then Kullanici urunun cucumber urunu oldugunu "Cucumber - 1 Kg" mesaji ile dogrular
    And Kullanici urunu sepetten kaldirir
    Then Kullanici sepetin bos oldugunu "You cart is empty!"  mesaj ile dogrular
      
