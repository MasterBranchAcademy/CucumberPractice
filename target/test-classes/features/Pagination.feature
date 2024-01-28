Feature: GreenKart Pagination test

  @Pagination
  Scenario: Greenkart Pagination sayfasini test etme
    Given Kullanici pagination_url sitesine gider
    When  Kullanici 2 sayfasina tiklar
    And   Kullanici Oncesi butonuna tiklar
    And   Kullanici Sonraki butonuna tiklar
    And   Kullanici Birinci butonuna tiklar
    And   Kullanici Son butonuna tiklar
    Then  Kullanici Sayfalarin saglikli bir sekilde degistigini Sayfa 4 ile dogrular

