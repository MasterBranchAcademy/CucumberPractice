Feature: Belirli bir ürünü sepete ekleyip sepeti kontrol etme.


  @greenkart

  Scenario: Greenkart sayfasini test etme

    Given Kullanici "greenkart_url" sitesine gider
    When Kullanıcı "cucumber" adlı bir ürünü arar
    And Kullanıcı "cucumber" ürününü sepete ekler
    And Kullanıcı sepete gitmek için sepet simgesine tıklar
    And kullanıcı "procced to checkout" dugmesine tiklar.
    Then Kullanıcı sepetteki ürünün doğru olduğunu doğrular
    When kullanıcı " place order" simgesine tiklar
    When kullanıcı "select country" üzerine tıklar
    When kullanıcı bir ülkeyi seçer
    When kullanıcı  "Agree to the Terms & Conditions" işaretler.
    When kullanıcı " procced button" duğmesine tiklar
    Then kullanıcı alışverişi başarıyla tamamladığını doğrular.
